export default class FunctionCall {
    constructor(parameters, name, className) {
        this.parameters = parameters;
        this.name = name;
        this.className = className;
    }

    toString() {
        const params = this.parameters.map((param) => param.toString()).join(',');

        return this.className.toLowerCase() + "." + this.name + "(" + params + ")";
    }
}
