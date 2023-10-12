/*
Leetcode 226
https://leetcode.com/problems/invert-binary-tree/
Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
       4
      /\
     2   7
    /\   /\
   1  3 6  9
Time: O(n) | Space: O(h)
*/

//DFS Solution
var invertTree = function(root) {
  function explore(node) {
      if (!node) return;
      
      explore(node.left);
      explore(node.right);
      
      swap(node);
  }
  explore(root);
  
  return root;
};

function swap(root) {
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
}



//JS ES6 syntax
var invertTree = function(root) {
  if (!root) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

//BFS Solution
function invertTree(root) {
  const queue = [root];

  while (queue.length) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  return root;
}


// O(n) Time, O(d) or O(log n) Space
function invertBinaryTree(tree) {
  invert(tree);
}

const invert = (node) => {
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  if (node.left) invert(node.left);
  if (node.right) invert(node.right);
}
