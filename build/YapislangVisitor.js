import DefineVariable from '../src/expressions/DefineVariable';
import NameAndValue from '../src/expressions/NameAndValue';
import Parameter from '../src/expressions/Parameter';
import TypeAssertion from '../src/expressions/TypeAssertion';
import Function from '../src/statements/Function';
import FunctionCall from '../src/statements/FunctionCall';
import ForStatement from '../src/statements/ForStatement';
import IfStatement from '../src/statements/IfStatement';
import YapislangParserVisitor from './YapislangParserVisitor';

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

  visitIdentifier(ctx) {
    let variable;
    Object.keys(this.VARS).forEach(type => {
      const v = this.VARS[type].get(ctx.getText())
      if (v) {
        variable = new DefineVariable(type, new NameAndValue(ctx.getText(), v))
      }
    })

    return variable;
  }

  visitTypeAssertionExpression(ctx) {
    const type = ctx.varModifier().getText();
    
    const value = ctx.singleExpression().accept(this);

    return new TypeAssertion(type, value)
  }

  visitFormalParameterList(ctx) {
    const params = ctx.formalParameterArg().map(arg => {
      const type = arg.varModifier().getText()
      const name = arg.assignable().getText()
      const value = arg.singleExpression() && arg.singleExpression().accept(this);

      return new Parameter(type, name, value)
    })

    return params;
  }

  visitFunctionDeclaration(ctx) {
    const type = ctx.varModifier().getText()
    const name = ctx.identifier().getText()

    const params = ctx.formalParameterList() && ctx.formalParameterList().accept(this);

    const body = ctx.functionBody().accept(this);

    return new Function(type, name, params, body)
  }

  visitFunctionBody(ctx) {
    this.enterInnerScope()
    
    const se = ctx.sourceElements() && ctx.sourceElements().accept(this);
    this.exitInnerScope()

    return se;
  }

  visitMemberDotExpression(ctx) {
    return ctx.getText()
  }
  
  visitMemberDotFunctionCa1ll(ctx) {
    console.log('called', ctx.getText());
    const prototype = ctx.singleExpression() && ctx.singleExpression().accept(this)
    const name = ctx.identifier().getText()
    const params = ctx.formalParameterList() && ctx.formalParameterList().accept(this);

    return new FunctionCall(params, name, prototype)
  }

  visitIterationStatement(ctx) {
    const variable = ctx.variableDeclarationList().accept(this)
    const expr = ctx.singleExpression().accept(this)
    const stats = ctx.statement().accept(this)

    return new ForStatement(variable, stats, null, expr)
  }

  visitIfStatement(ctx) {
    const condition = ctx.expressionSequence().accept(this)
    const statement = ctx.statement()[0].accept(this)
    const elseStat = ctx.statement().length > 1 && ctx.statement().splice(1).accept(this)

    return new IfStatement(condition, statement, elseStat)
  }

  visitVariableDeclaration(ctx) {
    const name = ctx.assignable().getText()
    const value = (ctx.singleExpression() && ctx.singleExpression().accept(this)) || undefined;
    
    if (!Object.values(this.VARS).some(map => map.has(name))) {
      return new NameAndValue(name, value);
    } else {
      console.error(`Error: Identifier ${name} has already been declared`)
    }
    
    return undefined;
  }

  visitVariableDeclarationList(ctx) {
    const type = ctx.varModifier().getText()
    
    if (this.VARS[type]) {
    } else {
      console.error(`Error: No such type ${type}` )
    }
    const nameAndValue = ctx.variableDeclaration().accept(this);

    if (nameAndValue) {
      this.VARS[type].set(nameAndValue.name, nameAndValue.value)
    }

    return new DefineVariable(type, nameAndValue)
  }
}