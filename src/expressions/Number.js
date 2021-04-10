export default class Number {
    constructor(number, fraction) {
        this.number = number;
        this.fraction = fraction;
    }

    toString() {
        if (!this.fraction) {
            return this.number;
        } else {
            return this.number + "." + this.fraction + "f";
        }
    }
}
