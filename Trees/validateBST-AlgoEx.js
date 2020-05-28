// AlgoExpert URL: https://www.algoexpert.io/questions/Validate%20BST

// SOLUTION 1 (BFS approach):
// Time: O(n) | Space: O(w) or O(log n)
// Does not account for important edge cases, suboptimal

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  // Traverse the tree using breadth first approach
  let currentNode = tree, root = tree;
  let queue = [currentNode];
  while (queue.length) {
    currentNode = queue.shift();
    // Check each node for a left and right
    if (currentNode.left) {
      // Check if left is strictly less than current node
      if (currentNode.left.value < currentNode.value) queue.push(currentNode.left);
      else return false;
    }
    if (currentNode.right) {
      // Check if right is greater than or equal to current node
      if (currentNode.right.value >= currentNode.value) queue.push(currentNode.right);
      else return false;
    }
  }

  // If we finish, tree is valid
  return true;
}
