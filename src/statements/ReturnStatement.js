import Compiler from "../../build/compiler";

export default class ReturnStatement {
    constructor(statement) {
        this.statement = statement;
    }

    toIR() {
        return this;
    }
}
