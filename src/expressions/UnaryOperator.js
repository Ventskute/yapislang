export default class UnaryOperator {
    constructor(variable, operator, side) {
        this.variable = variable;
        this.operator = operator;
        this.side = side;
    }

    toString() {
        if (this.side.equals("right"))
            return this.variable + this.operator;
        else if (side.equals("left"))
            return this.operator + this.variable;
        else return "undefined";
    }
}
