/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0);
  let currNode = tempNode;

  while (l1 && l2) {
      if (l1.val < l2.val) {
          currNode.next = l1;
          l1 = l1.next;
      } else {
          currNode.next = l2;
          l2 = l2.next;
      }
      currNode = currNode.next;
  }
  if (l1 !== null) {
      currNode.next = l1;
      l1 = l1.next;
  }

  if (l2 !== null) {
      currNode.next = l2;
      l2 = l2.next;
  }
  return tempNode.next;
};
