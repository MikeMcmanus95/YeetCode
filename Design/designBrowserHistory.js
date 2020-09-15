// Leetcode URL: https://leetcode.com/problems/design-browser-history/
/**
 * @param {string} homepage
 */
const BrowserHistory = function(homepage) {
  this.stack = [homepage];
  this.currentPage = homepage;
  this.currentPos = 0;
};

/**
 * Time: O(1) | Space: O(1)
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
  if (this.currentPos !== this.stack.length - 1) {
      this.stack = this.stack.slice(0, this.currentPos + 1);
  }
  this.stack.push(url);
  this.currentPos = this.stack.length - 1;
  this.currentPage = url;
};

/**
 * Time: O(1) | Space: O(1)
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  let newPosition = this.currentPos - steps;
  if (newPosition < 0) newPosition = 0;
  this.currentPos = newPosition;
  this.currentPage = this.stack[this.currentPos];
  return this.currentPage;
};

/**
 * Time: O(1) | Space: O(1)
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
  let newPosition = this.currentPos + steps;
  if (newPosition >= this.stack.length) newPosition = this.stack.length - 1;
  this.currentPos = newPosition;
  this.currentPage = this.stack[this.currentPos];
  return this.currentPage;
};

/**
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/
