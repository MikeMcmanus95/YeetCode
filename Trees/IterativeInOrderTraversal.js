
// AlgoExpert In-Order Traversal using Pointers (Only works with node.parent property enabled)
// Time; O(n) | Space: O(1)
const DFS = (root, callback) => {
  let prev = null;
  let curr = root;
  let next = null;
  while (curr) {
    if (prev === curr.parent || prev === null) {
      if (curr.left) next = curr.left;
      else {
        callback(curr);
        next = curr.right ? curr.right : curr.parent;
      }
    }
    else if (prev === curr.left) {
      callback(curr);
      next = curr.right ? curr.right : curr.parent;
    }
    else {
      next = curr.parent;
    }

    prev = curr;
    curr = next;
  }
}

// Leetcode Iterative In-Order Traversal using a Stack
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
 * @return {number[]}
 */

 // Time: O(n) | Space: O(d)
const inorderTraversal = function(root) {
  const resultArr = [];
  const stack = [];
  let current = root;
  while (current || stack.length) {
      if (current === null) {
          let lastNode = stack.pop();
          resultArr.push(lastNode.val);
          current = lastNode.right;
      } else {
          stack.push(current);
          current = current.left;
      }
  }
  return resultArr;
};
