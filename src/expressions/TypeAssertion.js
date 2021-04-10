export default class TypeAssertion {
    constructor(type, variable) {
        this.type = type;
        this.variable = variable;
    }

    toString() {
        return `(${this.type})${this.variable}`;
    }
}
