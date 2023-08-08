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

        if (n === k) return curr.val;
        curr = curr.right;
    }
}