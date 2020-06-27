/*
AlgoExpert URL: https://www.algoexpert.io/questions/Node%20Depths
*/


// SOLUTION 1:
// Time: O(n) | Space: O(W) where W is the width of the tree
//                 or: O(log(n))
function nodeDepths(root) {
  root.depth = 0;
  let queue = [root];
  let total = 0;
  let currentNode;
  while (queue.length) {
    currentNode = queue.shift();
    total += currentNode.depth;
    if (currentNode.left !== null) {
      currentNode.left.depth = currentNode.depth + 1;
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      currentNode.right.depth = currentNode.depth + 1;
      queue.push(currentNode.right);
    }
  }
  return total;
}


// SOLUTION 2:
// Time: O(n) | Space: O(d) where d is the deepest leaf node.
function nodeDepths(root, depth = 0) {
  if (!root) {
    return 0;
  }
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.depth = 0;
  }
}
