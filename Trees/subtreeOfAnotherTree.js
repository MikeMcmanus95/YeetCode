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
function isSubTree(root, subRoot) {
    if (!root) return false;
    if (isIdentical(root, subRoot)) return true;
    return isSubTree(root.left, subRoot) || isSubTree(root.right, subRoot);
}

function isIdentical(root, subRoot) {
    if (!root && !subRoot) return true;

    if (!root || !subRoot || root.val !== subRoot.val) return false;

    return isIdentical(root.left, subRoot.left) && isIdentical(root.right, subRoot.right);
}