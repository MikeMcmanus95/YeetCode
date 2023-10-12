/*
Leetcode 98
Leetcode URL: https://leetcode.com/problems/validate-binary-search-tree/
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

Example
                 20
              /     \
           10        30
            \
              18
            /   \
         9      19

The recursion call will be the following:

isValidBST(root: 20, min = -Infinity, max = Infinity)
  isValidBST(root: 10, min = -Infinity, max = 20)
    isValidBST(root: 18, min = 10, max = 20)
      isValidBST(root: 9, min = 10, max = 18): false, though 9 < 18 < 19, 9 is lower than the min=10, so it will return false.
*/

//depth first traversal
function isValidBST(root) {
  let isValid = true;
  let prev = undefined;
  
  function traverse(curr) { //in order traversal
      if (!curr) return;
      
      //go to the left first
      traverse(curr.left);
      
      //process current node
      if (prev !== undefined && curr.val <= prev) { //uh oh! not in order!
          isValid = false;
      } else {
          prev = curr.val; //update prev
      }
      
      //go to the right
      traverse(curr.right);
  }
  
  traverse(root);
  
  return isValid;
}

//Recursive
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if(!root) return true;
  if(root.val <= min || root.val >= max) return false;
  return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high);
};

//Iterative
var isValidBST = function(root) {
  const stack = [[-Infinity, Infinity, root]];
  
  while (stack.length) {
    const [ min, max, node ] = stack.pop();
    if (!node) continue;
    
    if (node.val <= min || node.val >= max) return false;
      
    stack.push(
      [node.val, max, node.right],
      [min, node.val, node.left],
    );
  }
  
  return true;
};


const isValidBST = function (root) {
  let current = root;
  let result = [];
  let isValid = true;
  const traverse = (node) => {
    if (node) {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }
  };
  traverse(current);
  for (let i = 0; i < result.length; i++) {
    if (result[i] >= result[i + 1]) isValid = false;
  }
  return isValid;
};
