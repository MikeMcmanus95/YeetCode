/*
Given a linked list, sum all elements in the list.

Examples:
• Given a linked list: 1 ➞ 4 ➞ 5 // returns 10
• Given a linked list: 1 // returns 1

Time <= 1 min
*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

// Iterative
// Time O(n)
function sum(node) {
    let result = 0;

    while (node) {
        result += node.value;
        node = node.next;
    }

    return result;
}

// Recursive
// Time O(n)
function sum(node) {
    if (!node) return 0;
    return node.value + sum(node.next)
  }

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(sum(null)) // 0
console.log(sum(LL1)) // 10
console.log(sum(new ListNode(1))) // 1