
export default class ElseStatement {
    statements = [];

    constructor(statements) {
        this.statements = statements;
    }

    toString() {
        const str = this.statements.reduce((str, stat) => {
            const v = str + stat.toString();
            if (!stat.toString().endsWith("}")) v += ";";
            return v;
        });
        
        return "else{" + str + "}";
    }
}
