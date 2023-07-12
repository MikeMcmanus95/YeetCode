/*
Leetcode 102
https://leetcode.com/problems/binary-tree-level-order-traversal/description/
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Time: O(n) because each node needs to be pushed onto the queue exactly once | Space: O(n) for the queue which will be at most N because each node is pushed into the queue exactly once
*/

//Iterative Solution
//Time: O(N) | Space: O(N)
function levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        let currentLevel = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const curr = queue.shift();
            currentLevel.push(curr.val);
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        }
        result.push(currentLevel);
    }

    return result;
}

//Recursive DFS Solution
//Time: O(N) | Space: O(N)
var levelOrder = function(root) {
    const result = [];
    
    function traverse(node, level) {
        if(!node) return;
        
        if(!result[level]) result[level] = [node.val];
        else result[level].push(node.val);
        
        traverse(node.left, level+1);
        traverse(node.right, level+1);
    }
    
    traverse(root, 0);
    return result;
};