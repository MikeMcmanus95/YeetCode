/*
Leetcode 145
https://leetcode.com/problems/binary-tree-postorder-traversal/description/

Given the root of a binary tree, return the postorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [3,2,1]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]

Traversal is left subtree, root then right subtree
Time complexity:
O(n) Since we are visiting each node one by one.

Space complexity:
O(h) where h is the height of the tree, in a balanced BST its equal to O(log n)
*/
var postorderTraversal = function(root) {
    const result = [];
    
    function dfs(root) {
        if (!root) return;
        
        dfs(root.left);
        dfs(root.right);
        result.push(root.val);
    }
    
    dfs(root);
    
    return result;
};

var postorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let curr = root;
    while (curr) {
        stack.push(curr);
        curr = curr.left || curr.right;
    }

    let prev;
    while (stack.length) {
        curr = stack.pop();
        result.push(curr.val);
        prev = stack[stack.length - 1];

        if (prev && prev.left === curr && prev.right) {
            let node = prev.right;
            while (node) {
                stack.push(node);
                node = node.left || node.right;
            }
        }
    }

    return result;
};