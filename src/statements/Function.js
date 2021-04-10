export default class Function {
    constructor(type, name, parameters, statements) {
        this.parameters = parameters;
        this.name = name;
        this.type = type;
        this.statements = statements;
    }

    toString() {
        const stats = this.statements.reduce((str, stat) => {
            const v = str + stat.toString();
            if (!stat.toString().endsWith("}")) v += ";";
            return v;
        });
        const params = this.parameters.map((param) => param.toString()).join(',');
        
        return this.type + " " + this.name + " ( " + params + ")" + "{" + stats + "}";
    }
}
