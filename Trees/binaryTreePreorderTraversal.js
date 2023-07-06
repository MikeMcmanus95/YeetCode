/*
Leetcode 144
https://leetcode.com/problems/binary-tree-preorder-traversal/description/

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,2,3]


*/

//recursive
function preorderTraversal(root) {
    function dfs(root) {
        if (!root) return;
        result.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }

    const result = [];
    dfs(root);

    return result;
}

/*
iterative
The key is to use a stack to store nodes whose values haven’t been pushed yet.
So for pre-order traversal, we only need to store right values on the stack,
because left values can be immediately pushed to result.
*/
function preorderTraversal(root) {
    const result = [];
    const stack = [];
    let curr = root;

    while (curr || stack.length) {
        if (!curr) curr = stack.pop();

        result.push(curr.val);

        if (curr.right) stack.push(curr.right);

        curr = curr.left;
    }

    return result;
}