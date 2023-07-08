/*
Leetcode 94
https://leetcode.com/problems/binary-tree-inorder-traversal/description/

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: root = []
Output: []

Traversal is left subtree, root then right subtree
Time: O(n) | Space: O(h)
*/


var inorderTraversal = function(root) {
    const result = [];
    
    function dfs(root) {
        if (!root) return;
        
        dfs(root.left);
        result.push(root.val);
        dfs(root.right);
    }
    
    dfs(root);
    
    return result;
};

var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let curr = root;
    
    while (curr || stack.length) {
        //get curr all the way to the bottom left and at the same time, push everything you see into the result
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        
        //now that curr is null, move curr back to the top of the stack and push that value into result then visit the right subtree
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    
    return result;
};