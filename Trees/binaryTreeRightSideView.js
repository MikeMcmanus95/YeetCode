/*
Leetcode 199
https://leetcode.com/problems/binary-tree-right-side-view/editorial/

Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]
*/

//level by level order traversal
var rightSideView = function(root) {
    if (!root) return [];

    let queue = [root];
    const result = [];

    while (queue.length) {
        let size = queue.length;
        let nextGen = [];

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (!queue.length) result.push(curr.val);
            //if (i === size - 1) result.push(curr.val);
            
            if (curr.left) nextGen.push(curr.left);
            if (curr.right) nextGen.push(curr.right); 
        }
        queue = nextGen;
    }

    return result;
};