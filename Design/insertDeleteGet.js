// Leetcode URL: https://leetcode.com/problems/insert-delete-getrandom-o1/
// Design a data structure that supports all following operations in average O(1) time.

// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.map = {};
  this.values = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val] !== undefined) return false;
  this.map[val] = this.values.length;
  this.values.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map[val] === undefined) return false;
  // grab the index of the item we want to remove
  const idx = this.map[val];
  // delete it from our obj
  delete this.map[val];
  // pop the last value from our array
  const last = this.values.pop();
  // if our idx is equal to our length, we popped the last element and we're done.
  if (this.values.length === idx) return true;
  // otherwise, reassign the last element to wherever our original element was
  this.map[last] = idx;
  this.values[idx] = last;
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let idx = Math.floor(Math.random() * this.values.length);
  return this.values[idx];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
