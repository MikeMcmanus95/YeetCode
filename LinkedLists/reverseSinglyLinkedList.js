// Leetcode URL: https://leetcode.com/problems/reverse-linked-list/submissions/

const reverseList = function(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  head = prev;
  return head;
};
