/*
Given a linked list, find the middle element in one pass. If the length of the list is even, return the first of the two middle nodes.
Follow-up: What if we want to return the second of the two middle nodes in lists with even numbers of nodes?

Examples:
• Given a linked list: 1 ➞ 3 ➞ 5 // returns 3
• Given a linked list:  1 ➞ 2 ➞ 3 ➞ 4 // returns 2

Time <= 2 min
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

// Iterative Solution
// Time O(n)
function findMiddle(head) {
    if (!head) {
      return null
    }
    let slow = head;
    let fast = head;
  
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    return slow.value;
  }

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(1, new ListNode(3, new ListNode(-13, new ListNode(-3, new ListNode(1)))))
var LL3 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))))
console.log(findMiddle(null)) // null
console.log(findMiddle(LL1)) // 3
console.log(findMiddle(LL2)) // -13
console.log(findMiddle(LL3)) // 2
console.log(findMiddle(new ListNode(1))) // 1