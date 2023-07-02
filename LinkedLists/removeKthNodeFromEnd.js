/*
Leetcode 19
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Time: O(n) | Space: O(1)
*/
class ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = null === undefined ? next : next;
}

function removeNthFromEnd(head, n) {
  //Edge Case
  if (head === null) return -1;
  if (n === 0) return head;

  let dummyhead = new ListNode(null, head);

  let p1 = dummyhead;
  let p2 = dummyhead;

  //figure out where p1 starts
  while (n > 0) {
  p1 = p1.next;
  n--
  }
  
  if (p1 === null) return -1

  //move p1 and p2 at the same time
  while (p1 && p1.next) {
  p1 = p1.next;
  p2 = p2.next;
  }

  //rewire p2
  p2.next = p2.next.next

  return dummyhead.next;
}


//------------------------------------------------------------------------------------
// AlgoExpert URL: https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// SOLUTION 1:
// Time O(n) | Space O(1)
function removeKthNodeFromEnd(head, k) {
  let length = 1;
  let position = 0;
  let previous;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }
  current = head;
  while (current) {
    position++;
    if (previous && position === length - k + 1) {
      previous.next = current.next;
    } else if (!previous && length - k + 1 === 1) {
      current = current.next;
      head.value = current.value;
      head.next = current.next;
    }
    previous = current;
    current = current.next;
  }
}

// SOLUTION 2: (AlgoExpert)
// Time O(n) | Space O(1)

function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;
  let counter = 1;
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}
