// Leetcode URL: https://leetcode.com/problems/design-a-stack-with-increment-operation/
/**
 * @param {number} maxSize
 */
const CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.stack = []
  return null;
};

CustomStack.prototype.push = function(x) {
  if(this.stack.length !== this.maxSize){
    this.stack.push(x);
  }
  return null
};

CustomStack.prototype.pop = function() {
  if(this.stack.length === 0) return -1;
  return this.stack.pop();
};

CustomStack.prototype.increment = function(k, val) {
  if(this.stack.length === 0) return null
  let cap = k > this.stack.length ? this.stack.length : k

  for(let i = 0; i < cap; i++){
    this.stack[i] += val
  }
  return null
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
