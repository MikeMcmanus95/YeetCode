/*
Leetcode 116
https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Example 1:


Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
*/

//queue iterative and easy to visualize
var connect = function(root) {
    if (!root) return null;

    const queue = [root];

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);

            if (i === size - 1) curr.next = null;
            else curr.next = queue[0];
        }
    }

    return root;
};

//queue using level by level generation
var connect = function(root) {
    if (!root) return null;
    let queue = [root];

    while (queue.length) {
        let nextGen = [];
        while (queue.length) {
            let curr = queue.shift();
            curr.next = queue[0] || null;

            if (curr.left) {
                nextGen.push(curr.left, curr.right);
            }
        }

        queue = nextGen;
    }

    return root;
};