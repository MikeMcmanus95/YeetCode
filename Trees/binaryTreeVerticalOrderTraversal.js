/*
Leetcode 314
https://leetcode.com/problems/binary-tree-vertical-order-traversal/

Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
If two nodes are in the same row and column, the order should be from left to right.


Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]

Example 2:
Input: root = [3,9,8,4,0,1,7]
Output: [[4],[9],[3,0,1],[8],[7]]

Example 3:
Input: root = [3,9,8,4,0,1,7,null,null,null,2,5]
Output: [[4],[9,5],[3,0,1],[8,2],[7]]
*/

// Using a queue and a map to keep track of the x axis (columns) and the node values
var verticalOrder = function(root) {
    if (!root) {
        return [];
    }
    
    const result = [];
    const map = {}; //level:node.val
    
    let minimumX = Infinity;
    let maximumX = -Infinity;
    
    let queue = [[root, 0]];
    
    while (queue.length) {
        //shift from the beginning
        let [currNode, currX] = queue.shift(); 
        
        //update min and max
        minimumX = Math.min(minimumX, currX);
        maximumX = Math.max(maximumX, currX);
        
        //store it in our map
        if (!map[currX]) map[currX] = [];
        map[currX].push(currNode.val);
        
        
        //add children to the queue
        if (currNode.left) queue.push([currNode.left, currX - 1]);
        if (currNode.right) queue.push([currNode.right, currX + 1]);
    }
    
    //iterate through the map obj
    for (let i = minimumX; i <= maximumX; i++) {
        result.push(map[i]);
    }
    
    
    return result;
};