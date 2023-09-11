/*
Leetcode 230
https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/

Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

Example 1:
Input: root = [3,1,4,null,2], k = 1
Output: 1

        3
    /       \
  1           4
   \
     2

*/

//Iterative Inorder Traversal
// Time complexity: O(H+k)O(H + k)O(H+k), where HHH is a tree height.
// This complexity is defined by the stack, which contains at least H+kH + kH+k elements, since before
// starting to pop out one has to go down to a leaf. This results in
// O(log⁡N+k)O(\log N + k)O(logN+k) for the balanced tree and
// O(N+k)O(N + k)O(N+k) for completely unbalanced tree with all
// the nodes in the left subtree.

// Space complexity: O(H)O(H)O(H) to keep the stack,
// where HHH is a tree height. That makes
// O(N)O(N)O(N) in the worst case of the skewed tree,
// and O(log⁡N)O(\log N)O(logN) in the average case of the balanced tree.
// function kSmallest(root, k) {

//iterative inorder traversal where count = 1
var kthSmallest = function(root, k) {
    const stack = [];
    let curr = root;
    let count = 1;

    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        curr = stack.pop();

        if (count === k) return curr.val;
        else count++;

        curr = curr.right;
    }
};

//iterative inorder traversal where count = 0
var kthSmallest = function(root, k) {
    let stack = [];
    let curr = root;
    let n = 0;

    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        n++;

        if (k === n) return curr.val;
        curr = curr.right;
    }
};

//recursive inorder traversal and count = 1
var kthSmallest = function(root, k) {
    let val;
    let count = 1;

    function inorderTraversal(root) {
        if (!root) return;

        inorderTraversal(root.left);
        if (count === k) val = root.val;
        count++;
        inorderTraversal(root.right);
    }

    inorderTraversal(root);

    return val;

};

//recursive inorder traversal and count = 0
var kthSmallest = function(root, k) {
    let result;
    let count = 0;

    function inorderTraversal(root) {
        if (!root) return;

        inorderTraversal(root.left);
        if (count++ < k) result = root.val;
        inorderTraversal(root.right);
    }

    inorderTraversal(root);

    return result;

};