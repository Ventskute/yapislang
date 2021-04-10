
export default class ForStatement {
    constructor(parameter, statements, condition, expression) {
        this.parameter = parameter;
        this.statements = statements;
        this.condition = condition;
        this.expression = expression;
    }

    toString() {
        const str = this.statements.reduce((str, stat) => {
            const v = str + stat.toString();
            if (!stat.toString().endsWith("}")) v += ";";
            return v;
        });
        return "for(" +
                this.parameter.toString() + ";" +
                this.condition.toString() + ";" +
                this.expression.toString() + "){" +
                str + "}";
    }
}
