/*
Leetcode 124
https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
*/

var maxPathSum = function(root) {
  let max = -Infinity;

  function findSums(node) {
    if (!node) return 0;

    let left = findSums(node.left);
    let right = findSums(node.right);
    let allSums = node.val + left + right;
    let leftNodeSums = left + node.val;
    let rightNodeSums = right + node.val;

    max = Math.max(max, node.val, allSums, leftNodeSums, rightNodeSums);

    return Math.max(node.val, leftNodeSums, rightNodeSums);
  }

  findSums(root);

  return max;
};

// AlgoExpert URL: https://www.algoexpert.io/questions/Max%20Path%20Sum%20In%20Binary%20Tree
// O(n) Time | O(log (n)) Space
function maxPathSum(tree) {
  let [_, maxSum] = findMaxSum(tree);
  return maxSum;
}


function findMaxSum(tree) {
  if (tree === null) return [-Infinity, -Infinity];

  let [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  let [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
  let maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);
  // This value could be negative, which is why we do our subsequent max check
  let value = tree.value;
  let maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  let maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
  let maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);

  return [maxSumAsBranch, maxPathSum];
}
