/*
Given an unsorted linked list, find the element with the largest value.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 ➞ 1 // returns 5
• Given a linked list: 1  // returns 1

Target <= 1 min
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

// Iterative
// O(n)
function findMax(node) {
    let max = node.value;

    while (node) {
      max = Math.max(node.value, max);
      node = node.next;
    }
    
    return max;
}

// Recursive
// O(n)
function findMax(node) {
    if (!node) return 0;
    return Math.max(node.value, findMax(node.next));
}

// Alternative Recursive Solution
// O(n) time
function findMax(node) {
    if (!node.next) {
      return node.value;
    } else {
      const biggestValueInRest = findMax(node.next);
  
      return (node.value > biggestValueInRest ? node.value
        : biggestValueInRest);
    }
  }

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5, new ListNode(1))))
var LL2 = new ListNode(7, new ListNode(1, new ListNode(5, new ListNode(1))))
var LL3 = new ListNode(-1, new ListNode(-3, new ListNode(-5, new ListNode(0, new ListNode(-11)))))
console.log(findMax(LL1)) // 5
console.log(findMax(LL2)) // 7
console.log(findMax(LL3)) // 0
console.log(findMax(new ListNode(1))) // 1