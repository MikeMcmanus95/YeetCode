// AlgoExpert URL: https://www.algoexpert.io/questions/Min%20Max%20Stack%20Construction


// All methods:
// Time O(1) | Space O(1)
class MinMaxStack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1].value;
  }

  pop() {
    let poppedNode = this.stack.pop();
    return poppedNode.value;
  }

  push(number) {
    let min = Infinity, max = -Infinity;
    if (this.stack.length) {
      min = Math.min(this.stack[this.stack.length - 1].min, number);
      max = Math.max(this.stack[this.stack.length - 1].max, number);
    } else {
      min = number;
      max = number;
    }
    let node = { value: number, min, max };
    this.stack.push(node);
  }

  getMin() {
    return this.stack[this.stack.length - 1].min;
  }

  getMax() {
    return this.stack[this.stack.length - 1].max;
  }
}
