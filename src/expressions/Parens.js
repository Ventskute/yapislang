export default class Parens {
    constructor(expression) {
        this.expression = expression;
    }

    toString() {
        return "(" + this.expression.toString() + ")";
    }
}
