class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Time Complexity O(n) | Space O(n)
const find_sum_of_path_numbers = function (root) {
  return findPathSum(root, 0);
};

const findPathSum = (currentNode, pathSum) => {
  if (currentNode === null) return 0;

  // This formula will allow our path sum to scale properly
  pathSum = 10 * pathSum + currentNode.value;

  // If we are at a leaf node, return the path sum
  if (!currentNode.left && !currentNode.right) {
    return pathSum;
  }

  // If we are not at a leaf node, call findPathSum on the left and right subtrees
  return findPathSum(currentNode.left, pathSum) + findPathSum(currentNode.right, pathSum);
}


const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
