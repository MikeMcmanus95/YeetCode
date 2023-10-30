/*
Given a sorted linked list of unique integers, remove a node with the target value from the list.

Examples:
• Given a linked list: -1 ➞ 1 ➞ 3 ➞ 4, target: 1 // returns -1 ➞ 3 ➞ 4
• Given a linked list: 5, target: 3 // returns 5

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

// Iterative Solution
// Time O(n)
function remove(head, target) {
    let sentinel = new ListNode(0, head);
    let prev = sentinel;
    let curr = head;
  
    while (curr) {
      if (curr.value === target) {
        prev.next = curr.next;
        break;
      }
      curr = curr.next;
      prev = prev.next;
    }
  
    return sentinel.next;
  }

// Another Iterative Solution (from Shaping)
function remove(head, target) {
    if (!head) return head
    if (head.value === target) {
      return head.next
    }
    
    let curr = head
    while (curr.next && curr.next.value <= target) {
      if (curr.next.value === target) {
        curr.next = curr.next.next
        return head
      }
      curr = curr.next
    }
    return head
  }

// Recursive Solution
// Time O(n)
function remove(head, target) {
    if (!head) return null;
    
    if (head.value === target) {
      return head.next;
    }
    
    head.next = remove(head.next, target);
    
    return head;
  }

// Test Cases
var LL1 = new ListNode(-1, new ListNode(1, new ListNode(3, new ListNode(4))))
console.log(arrayify(remove(LL1, 1))) // [-1, 3, 4]
console.log(arrayify(remove(LL1, -1))) // [3, 4]
var LL1 = remove(LL1, -1) // Notice we expect this one to return a new head!
console.log(arrayify(remove(LL1, 4))) // [3]
console.log(arrayify(remove(LL1, 5))) // [3]
console.log(arrayify(remove(new ListNode(1), 1))) // []