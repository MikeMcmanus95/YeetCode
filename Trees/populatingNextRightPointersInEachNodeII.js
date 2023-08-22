/*
Leetcode 117
https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/description/

Given a (imperfect) binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.


Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
*/

//Time: O(n) | Space: O(n)
var connect = function(root) {
    if (!root) return null;
    let queue = [root];

    while (queue.length) {
        const size = queue.length;
        let nextGen = [];

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            curr.next = queue[0] || null;

            if (curr.left) nextGen.push(curr.left);
            if (curr.right) nextGen.push(curr.right);
        }

        queue = nextGen;
    }

    return root;
};