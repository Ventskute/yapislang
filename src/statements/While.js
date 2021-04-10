export default class While {
    constructor(condition, statements) {
        this.condition = condition;
        this.statements = statements;
    }

    toString() {
        const stats = this.statements.reduce((str, stat) => {
            const v = str + stat.toString();
            if (!stat.toString().endsWith("}")) v += ";";
            return v;
        });

        return `while(${this.condition.toString()}){${stats}}`;
    }
}
