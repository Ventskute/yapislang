import DefineVariable from '../src/expressions/DefineVariable';
import NameAndValue from '../src/expressions/NameAndValue';
import Parameter from '../src/expressions/Parameter';
import TypeAssertion from '../src/expressions/TypeAssertion';
import Function from '../src/statements/Function';
import FunctionCall from '../src/statements/FunctionCall';
import ForStatement from '../src/statements/ForStatement';
import IfStatement from '../src/statements/IfStatement';
import YapislangParserVisitor from './YapislangParserVisitor';
import ReturnStatement from '../src/statements/ReturnStatement';
import Compiler from './compiler';
import llvm from 'llvm-node';
import Math from '../src/expressions/Math';

export default class Visitor extends YapislangParserVisitor {
  OUTER_SCOPE = []
  VARS = {
    'string[]': new Map(),
    'string': new Map(),
    'char': new Map(),
    'int': new Map(),
    'bool': new Map(),
  }
  FUNCTIONS = new Map()

  visitChildren(ctx) {
    if (!ctx) {
      return;
    }

    if (ctx.children) {
      if (ctx.children.length === 1) {
        return ctx.children[0].accept(this)
      }

      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return child.accept(this);
        } else {
          return child.getText();
        }
      }).filter(el => !!el);
    }
  }

  enterInnerScope() {
    const newVars = {};
    Object.keys(this.VARS).forEach((type) => {
      newVars[type] = new Map(this.VARS[type])
    })

    this.OUTER_SCOPE.push(newVars)

    Object.values(this.VARS).forEach(map => map.clear())
  }

  exitInnerScope() {
    this.VARS = {...this.OUTER_SCOPE.pop()}
  }

  visitSourceElements(ctx) {
    const se = ctx.sourceElement().map(el => {
      const child = el.statement()

      if (child.children && child.children.length != 0) {
        return child.accept(this);
      } else {
        return child.getText();
      }
    });

    return se;
  }

  visitAdditiveExpression(ctx) {
    const [L, R] = ctx.singleExpression() && ctx.singleExpression().map(exp => exp.accept(this))

    const operation = (ctx.Plus() || ctx.Minus()).getText()

    return new Math(operation, L, R)
  }

  visitTypeAssertionExpression(ctx) {
    const type = ctx.varModifier().getText();

    const value = ctx.singleExpression().accept(this);

    return new TypeAssertion(type, value)
  }

  visitFormalParameterList(ctx) {
    const params = ctx.formalParameterArg().map(arg => {
      const name = arg.assignable().getText()
      let value = arg.singleExpression() && arg.singleExpression().accept(this);
      let type;

      if (arg.varModifier()) {
        type = arg.varModifier().getText();
      } else {
        type = Object.keys(this.VARS).find(key => this.VARS[key].has(name))

        if (!value) value = this.VARS[type].get(name).nameAndValue.value
      }

      if (!type) {
        throw new ReferenceError(`no such variable ${name}`)
      }

      return new Parameter(type, name, value)
    })

    return params;
  }

  visitFunctionDeclaration(ctx) {
    const type = ctx.varModifier().getText()
    const name = ctx.identifier().getText()
    const params = ctx.formalParameterList() && ctx.formalParameterList().accept(this)
    let func;

    if (!this.FUNCTIONS.has(name) && !Compiler.DEFAULT_FUNCTIONS[name]) {
      const llFunc = Compiler.createFunction(type, name)

      const body = ctx.functionBody().accept(this)

      Compiler.closeFunction(llFunc)

      func = new Function(type, name, params, body, llFunc)

      const retStat = func.statements && func.statements[func.statements.length - 1];
      if (retStat && retStat instanceof ReturnStatement) {
        const returnType = retStat.statement.type;

        if (returnType !== type) {
          throw new TypeError(`Return type ${returnType} doesn't match function type ${type}`)
        }
      }

      this.FUNCTIONS.set(name, func)
    } else {
      throw new ReferenceError(`function ${name} has already been declared!`)
    }

    return func
  }

  visitFunctionBody(ctx) {
    this.enterInnerScope()

    const se = ctx.sourceElements() && ctx.sourceElements().accept(this);
    this.exitInnerScope()

    return se;
  }

  visitReturnStatement(ctx) {
    const statement = ctx.expressionSequence().accept(this);

    let returnValue = statement.nameAndValue.value;

    let value
    const dv = this.VARS[statement.type].get(statement.nameAndValue.name);
    if (dv) {
      value = dv.value
    } else {
      value = Compiler.getValue(statement.type, returnValue);
    }

    const ret = Compiler.builder.createRet(value);

    return new ReturnStatement(statement).toIR()
  }

  visitIterationStatement(ctx) {
    const typesMap = {
      'string': 'string[]',
      'char': 'string'
    }

    const variable = ctx.variableDeclarationList().accept(this)
    const expr = ctx.singleExpression().accept(this)
    const stats = ctx.statement().map(el => el.accept(this))

    if (expr.type !== typesMap[variable.type]) {
      throw new TypeError(`variable of type ${variable.type} not found in ${expr.type}`)
    }

    return new ForStatement(variable, stats, null, expr)
  }

  visitIfStatement(ctx) {
    const condition = ctx.expressionSequence().accept(this)
    const statement = ctx.statement().map(el => el.accept(this))
    const elseStat = ctx.statementList() && ctx.statementList().statement().map(el => el.accept(this))

    return new IfStatement(condition, statement, elseStat)
  }

  visitVariableStatement(ctx) {
    return ctx.variableDeclarationList().accept(this)
  }

  visitLiteralExpression(ctx) {
    let value = ctx.getText();

    if (value.length >= 2 && (value[0] === '"' || value[0] === "'")) {
      value = value.substr(1, value.length - 2);
    }
    return value
  }

  visitVariableDeclaration(ctx) {
    const name = ctx.assignable().getText()
    const value = ctx.singleExpression() && ctx.singleExpression().accept(this);

    if (!Object.values(this.VARS).some(map => map.has(name))) {
      return new NameAndValue(name, value);
    } else {
      throw new ReferenceError(`identifier ${name} has already been declared`)
    }

    return undefined;
  }

  visitVariableDeclarationList(ctx) {
    const type = ctx.varModifier().getText()

    if (this.VARS[type]) {
    } else {
      throw new TypeError(`No such type ${type}`)
    }
    const nameAndValue = ctx.variableDeclaration().accept(this);

    if (nameAndValue) {
      if (nameAndValue.value instanceof FunctionCall) {
        const funcType = nameAndValue.value.type

        if (funcType !== type) {
          throw new TypeError(`function ${nameAndValue.value.name} returns ${nameAndValue.value.type}, but ${type} expected`)
        }
      }

      const dv = new DefineVariable(type, nameAndValue).toIR()
      this.VARS[type].set(nameAndValue.name, dv)
      return dv
    }

    return
  }

  visitFunctionCall(ctx) {
    const name = ctx.identifier().getText()
    let params = ctx.formalParameterList() && ctx.formalParameterList().accept(this)
    let type = null;
    let func = null;

    if (this.FUNCTIONS.has(name)) {
      func = this.FUNCTIONS.get(name)
      type = func.type

      if (func.parameters) {
        const paramsMatch = func.parameters.every((param, i) => {
          return param.type === params[i].type
        })

        if (!paramsMatch) {
          throw new TypeError(`parameters of function ${name} and its call mismatchs`)
        }
      }

      const callee = Compiler.module.getOrInsertFunction(name, Compiler.FUNCTION_TYPES[type]);
      Compiler.builder.createCall(
        callee.functionType, callee.callee, [], name);
    } else if (!!Compiler.DEFAULT_FUNCTIONS[name]) {
      const callee = Compiler.DEFAULT_FUNCTIONS_LOGIC[name]
      if (!params) params = ctx.singleExpression() && ctx.singleExpression().map(exp => exp.accept(this))
      if (!params) params = []

      callee(...params.map(p => {
        return p.toIR()
      }))
    } else {
      throw new ReferenceError(`Function ${name} is not defined`)
    }

    return new FunctionCall(func, type, name, params || undefined, null)
  }

  visitIdentifier(ctx) {
    let variable;
    for (let type in this.VARS) {
      const v = this.VARS[type].get(ctx.getText())

      if (v !== undefined) {
        variable = v
        break;
      }
    }

    if (!variable) throw new ReferenceError('No such variable ' + ctx.getText())

    return variable;
  }
}