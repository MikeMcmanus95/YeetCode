/* Leetcode URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/
const maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  const traverse = (node, count = 0) => {
    count++;
    if (count > max) max = count;
    if (node.left) traverse(node.left, count);
    if (node.right) traverse(node.right, count);
  };
  traverse(root);
  return max;
};
