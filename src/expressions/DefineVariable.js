export default class DefineVariable {
  constructor(type, nameAndValue) {
    this._type = type;
    this._nameAndValue = nameAndValue;
  }

  get type() {
    return this._type;
  }

  get nameAndValue() {
    return this._nameAndValue;
  }

  toString() {
    return this._type + ' ' + this._nameAndValue.toString();
  }
}
