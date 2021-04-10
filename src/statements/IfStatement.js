export default class IfStatement {
    constructor(condition, statements, elseStatements) {
        this.condition = condition;
        this.statements = statements;
        this.elseStatement = elseStatements;
    }

    toString() {
        const stats = this.statements.reduce((str, stat) => {
            const v = str + stat.toString();
            if (!stat.toString().endsWith("}")) v += ";";
            return v;
        });

        if (elseStatement) {
            return "if(" + this.condition.toString() + ")\n{" + stats + "}" + this.elseStatement.toString() + " ";
        }
        return "if(" + this.condition.toString() + ")\n{" + stats + "}";
    }
}
