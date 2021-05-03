export default class NameAndValue {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    toIR() {
        return this._name + " = " + this._value;
    }
}
