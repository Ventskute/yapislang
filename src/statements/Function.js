export default class Function {
    constructor(type, name, parameters, statements, llFunc) {
        this.parameters = parameters;
        this.name = name;
        this.type = type;
        this.statements = statements;
        this.llFunc = llFunc;
    }

    toIR() {
        return this
    }
}