export default class Condition {
    constructor(left, right, operator) {
        this.operator = operator;
        this.left = left;
        this.right = right;
    }

    toString() {
        return this.left + this.operator + this.right;
    }
}
