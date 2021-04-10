export default class Parameter {
    constructor(type, name, value) {
        this.type = type;
        this.name = name;
        this.value = value;
    }

    toString() {
        if (this.value) return this.value.toString();
        else return this.type + " " + this.name;
    }
}
