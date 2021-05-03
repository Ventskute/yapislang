import Compiler from "../../build/compiler";

export default class DefineVariable {
  constructor(type, nameAndValue) {
    this.type = type;
    this.nameAndValue = nameAndValue;
  }

  toIR() {
    this.llType = Compiler.getType(this.type, this.nameAndValue.value);
    this.llPtr = Compiler.builder.createAlloca(this.llType)
    this.value = Compiler.getValue(this.type, this.nameAndValue.value)
    this.store = Compiler.builder.createStore(this.value, this.llPtr)

    return this;
  }
}
