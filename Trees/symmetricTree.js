/*
Leetcode 101
https://leetcode.com/problems/symmetric-tree/description/

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true

Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
*/
//recursive
var isSymmetric = function(root) {
    if (!root) return true;
    return dfs(root.left, root.right)
};

function dfs(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;
    
    return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
}

//iterative
var isSymmetric = function(root) {
    if (!root.left && !root.right) return true;
    const queue = [root.left, root.right];

    while (queue.length) {
        let t1 = queue.shift();
        let t2 = queue.shift();

        if (!t1 && !t2) continue;
        if (!t1 || !t2) return false;
        if (t1.val !== t2.val) return false;

        queue.push(t1.left, t2.right, t1.right, t2.left)
    }

    return true;
};