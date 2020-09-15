
// https://leetcode.com/problems/min-stack/


// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.


// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


/*

{

  min = [-2, -2]
  stack = [-2, 0]
}

*/

/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.stack = [];
  this.min = [];
};

/**
* @param {number} x
* @return {void}
*/

/*
  min [-2, -3, -3]
  stack [-2, -3, 4]
*/
MinStack.prototype.push = function(x) {
  if (!this.min.length || x < this.min[this.min.length - 1]) {
    this.min.push(x);
  } else {
    let currentMin = this.min[this.min.length - 1];
    this.min.push(currentMin);
  }
  this.stack.push(x);
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.min.pop();
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
