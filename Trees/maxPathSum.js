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
