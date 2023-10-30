/*
Reverse a given linked list.

Examples:
• Given a linked list: 13 ➞ 1 ➞ 5 ➞ 3 ➞ 7 ➞ 10 // returns 10 ➞ 7 ➞ 3 ➞ 5 ➞ 1 ➞ 13
• Given a linked list: 1 // returns 1

Time <= 3 min
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

// Iterative Solution with reassigning .next values
function reverse(head) {
    let prev = null;
    let curr = head;
  
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  
    return prev;
}

// Alternative Solution (from Shaping)
// O(N) time
function reverse(head) {
    let prev;
    let cur = head;
  
    while (cur) {
      [cur.next, cur, prev] = [prev, cur.next, cur];
    }
  
    return prev;
  }

// Test Cases
var LL1 = new ListNode(13, new ListNode(1, new ListNode(5, new ListNode(3, new ListNode(7, new ListNode(10))))))
console.log(arrayify(reverse(new ListNode(1)))) // [1]
console.log(arrayify(reverse(new ListNode(1, new ListNode(2))))) // [2, 1]
console.log(arrayify(reverse(LL1))) // [10, 7, 3, 5, 1, 13]