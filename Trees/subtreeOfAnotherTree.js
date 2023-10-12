/*
Leetcode 572
https://leetcode.com/problems/subtree-of-another-tree/

Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.
A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

Example 1:
Input: root = [3,4,5,1,2], subRoot = [4,1,2]
Output: true

        3
       /\
      4  5
     /\
    1  2

     4
    /\
   1  2
*/

//DFS Solution
//Time: O(MN) | Space: O(M+N)
var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (isIdentical(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

function isIdentical(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isIdentical(p.left, q.left) && isIdentical(p.right, q.right);
}