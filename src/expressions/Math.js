export default class Math {
  constructor(operation, left, right) {
    this.operation = operation;
    this.left = left;
    this.right = right;
  }

  toString() {
    switch (operation) {
      case 'plus': {
        return this.left.toString() + '+' + this.right.toString();
      }
      case 'minus': {
        return this.left.toString() + '-' + this.right.toString();
      }
      case 'mult': {
        return this.left.toString() + '*' + this.right.toString();
      }
      case 'div': {
        return this.left.toString() + '/' + this.right.toString();
      }
    }
    return 'undefined';
  }
}
