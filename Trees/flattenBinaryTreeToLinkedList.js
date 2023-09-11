/*
Leetcode 114
https://leetcode.com/problems/flatten-binary-tree-to-linked-list/description/

Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

Example 1:
Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

*/

//O(1) space
//if curr has a left child, create a runner and run it all the way to the bottom right most
//rewire by taking runner.right = curr.right, sever the tie by doing curr.right = curr.left and update curr.left
var flatten = function(root) {
    let curr = root;
    
    while (curr) {
        if (curr.left) {
            let runner = curr.left;
            while (runner.right) {
                runner = runner.right;
            }
            
            runner.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        
        curr = curr.right;
    }
};



//Space: O(n)
// right, left, root -> postorder dfs
// set left child to null & set right child to the previous node
var flatten = function(root) {
    let prev = null;

    const traverse = node => {
        if (!node) {
            return;
        }
        
        //right
        traverse(node.right);
        
        //left
        traverse(node.left);
        
        //task on the node
        node.left = null;
        node.right = prev;
        prev = node;
        
    } 
    
    traverse(root);
};