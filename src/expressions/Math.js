import compiler from "../../build/compiler";

export default class Math {
  constructor(operation, left, right) {
    this.operation = operation;
    this.left = left;
    this.right = right;
  }

  toString() {
    switch (this.operation) {
      case '+': {
        return this.left.toString() + this.right.toString();
      }
      case '-': {
        return this.left.toString().replaceAll(this.right.toString(), "");
      }
      case '*': {
        return this.left.nameAndValue.value * this.right.nameAndValue.value;
      }
      case '/': {
        return this.left.nameAndValue.value / this.right.nameAndValue.value;
      }
    }
  }

  toIR() {
    const type = (this.left.type === "string" || this.right.type === "string") ? "string" : this.left.type;
    switch (this.operation) {
      case '+': {
        return compiler.getValue(type, this.left.toString() + this.right.toString());
      }
      case '-': {
        return compiler.getValue(type, this.left.toString().replaceAll(this.right.toString(), ""));
      }
      case '*': {
        return compiler.getValue(type, this.left.nameAndValue.value * this.right.nameAndValue.value);
      }
      case '/': {
        return compiler.getValue(type, this.left.nameAndValue.value / this.right.nameAndValue.value);
      }
    }
  }
}
