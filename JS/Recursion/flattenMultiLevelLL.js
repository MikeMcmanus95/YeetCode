// Leetcode URL: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head, temp) {
  let node = head;
  while (node !== null) {
    if (node.child) {
      let temp = node.next || null;
      let child = node.child;
      node.next = child;
      child.prev = node;
      node.child = null;
      flatten(child, temp);
    }
    if (node.next) node = node.next;
    else break;
  }
  if (temp) {
    temp.prev = node;
    node.next = temp;
  }

  return head;
};
