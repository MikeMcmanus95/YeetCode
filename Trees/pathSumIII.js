/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

 // Solution 1: Exponential
 // Time: O(2^n) | Space: O(2^n)
const pathSum = function(root, sum) {
  let total = 0;

  const helper = function(node, cur) {
      if (!node) return;
      helper(node.left, cur + node.val);
      helper(node.right, cur + node.val);
      if (cur + node.val === sum) total++;
  }

  const dfs = function(node) {
      if (!node) return;
      helper(node, 0);
      dfs(node.left);
      dfs(node.right);
  }
  dfs(root);
  return total;
};


// Solution 2: O(n) using Proxy
/**
 * This allows me to create default values for properties that dont exist on the obj
 * by accessing the "get" functionality and overriding it using a JS Proxy. For more
 * info, check out https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */
const handler = {
  get: function(target, name) {
      return target.hasOwnProperty(name) ? target[name] : 0;
  }
}

const pathSumProxy = function(root, sum) {
  let total = 0;
  const lookup = new Proxy({}, handler);
  lookup[sum] = 1;

  const dfs = function(node, rootSum) {
      if (!node) return;
      rootSum += node.val;
      total += lookup[rootSum];
      lookup[rootSum + sum] += 1;

      dfs(node.left, rootSum);
      dfs(node.right, rootSum);
      lookup[rootSum + sum] -= 1;
  }
  dfs(root, 0);
  return total;
};
