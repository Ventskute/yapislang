import llvm from "llvm-node";
import Compiler from "../../build/compiler";

export default class FunctionCall {
    constructor(llFunc, type, name, parameters = [], className) {
        this.llFunc = llFunc;
        this.type = type;
        this.parameters = parameters;
        this.name = name;
        this.className = className;
    }

    toIR() {
        const params = this.parameters.map((param) => param.toString()).join(',');

        return this.className.toLowerCase() + "." + this.name + "(" + params + ")";
    }
}
