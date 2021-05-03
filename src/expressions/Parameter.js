import compiler from "../../build/compiler";

export default class Parameter {
    constructor(type, name, value) {
        this.type = type;
        this.name = name;
        this.value = value;
    }

    toIR() {
        if (this.value) return compiler.getValue(this.type, this.value);
        else return '';
    }
}
