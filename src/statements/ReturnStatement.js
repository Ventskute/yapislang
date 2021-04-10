export default class ReturnStatement {
    constructor(statement) {
        this.statement = statement;
    }

    toString() {
        return "return " + this.statement.toString() ;
    }
}
