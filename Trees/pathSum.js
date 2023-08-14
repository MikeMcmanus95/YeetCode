/*
Given the root of a binary tree and an integer targetSum, return true if the tree has a
root-to-leaf path such that adding up all the values along the path equals targetSum.
A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The root-to-leaf path with the target sum is shown.

             5
            /\
           4  8
         /    /\
       11   13  4
       /\        \
      7  2        1
*/

//recursive DFS preorder
function hasPathSum(root, targetSum) {
    if (!root) return false;
    if (root.val === targetSum && (!root.left && !root.right)) return true;

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
}

//iterative DFS with stack
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    const stack = [[root, targetSum]];
  
    while (stack.length) {
      const [node, targetSum] = stack.pop();
  
      if (!node.left && !node.right && node.val === targetSum) {
        return true;
      }
  
      if (node.left) {
        stack.push([node.left, targetSum - node.val]);
      }
  
      if (node.right) {
        stack.push([node.right, targetSum - node.val]);
      }
    }
    return false;
  };