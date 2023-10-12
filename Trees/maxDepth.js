/* 
Leetcode 104
https://leetcode.com/problems/maximum-depth-of-binary-tree/
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

/*
Notes:
Top Down Recursive solution is like preorder
private int answer; // don't forget to initialize answer before call maximum_depth
private void maximum_depth(TreeNode root, int depth) {
    if (root == null) {
        return;
    }
    if (root.left == null && root.right == null) {
        answer = Math.max(answer, depth);
    }
    maximum_depth(root.left, depth + 1);
    maximum_depth(root.right, depth + 1);
}

Bottom Up Recursive solution is like postorder
public int maximum_depth(TreeNode root) {
    if (root == null) {
        return 0;                                   // return 0 for null node
    }
    int left_depth = maximum_depth(root.left);
    int right_depth = maximum_depth(root.right);
    return Math.max(left_depth, right_depth) + 1;   // return depth of the subtree rooted at root
}
*/

//Alternative way to write this using min and max
var isValidBST = function(root) {
  return explore(root, -Infinity, Infinity);
};

function explore(node, min, max){
  if (!node) return true;
  if (node.val <= min || node.val >= max) return false;
  
  return explore(node.left, min, node.val) && explore(node.right, node.val, max);
}


//Alternative way to write this, using similar DFS template
var maxDepth = function(root) {
  let maxDepth = 0;
  
  function explore(curr, tempDepth) {
      if (!curr) return;
      
      tempDepth++;
      maxDepth  = Math.max(maxDepth, tempDepth);
      
      explore(curr.left, tempDepth);
      explore(curr.right, tempDepth);
  }
  
  explore(root, 0);
  
  return maxDepth;
};

//Top Down - Upon going deep we increment our depth and pass it deeper. 
//When we reach a leaf, we return our accumulated depth.
function maxDepth(root) {
  let answer = 0;

  function visitNode(node, depth) {
      if (!node) return 0;
      if (node.left) visitNode(node.left, depth + 1);
      if (node.right) visitNode(node.right, depth + 1);
      if (!node.left && !node.right) answer = Math.max(answer, depth);
  }

  visitNode(root, 1)

  return answer
};


//Bottom Up - We go to the leaf node and upon returning a depth (going back up), each time we increment it by 1.
function maxDepth(root) {
  if (!root) return 0;

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

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

