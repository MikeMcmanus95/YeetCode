/*
https://leetcode.com/problems/palindrome-linked-list/

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:
Input: 1->2->2->1
Output: true

size = 7 / 2 = 4 (ceil) + 1

1->1->2->2->1->1

2->1->1->2->1->1
p1       X  p2
2->1->1->3->2->1->1


Approach:
-Get our size of the LL
-Divide size by 2
  -If size is even: p1 = size / 2 && p2 = (size / 2) + 1
  -Else: p1 = Math.ceil(size/2) - 1 && p2 = Math.ceil(size / 2) + 1
-Reverse first half of LL up to and equal to p1
-Traverse new LL using p1 and p2
  -If p1.val !== p2.val: return false
-Return true
*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let curr = head
  let reversed = createList(head).reverse();

  let i = 0;
  while(curr){
    if(curr.val !== reversed[i]){
      return false
    }
    i++
    curr = curr.next
  }
  return true
};

function createList(head){
  const res = []
  let curr = head

  while(curr){
    res.push(curr.val);
    curr = curr.next
  }

  return res
}

const head = new ListNode(1, new ListNode(2, new ListNode(3)))
const head2 = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))))

// console.log(reverseList(head))

console.log(isPalindrome(head)) // false
console.log(isPalindrome(head2)) // true


var isPalindrome = function(head) {
    // lists with 0 or 1 node will automatically be palindrome
    if(head == null || head.next == null) return true;
        // add two indices, slow will eventually point to the mid node of the palindrome
        var slow = head;
        // fast is a helper, it will be assigned some conditions to help make sure that slow point to the mid node
        var fast = head;

        // both slow and fast point to first node at the beginning
        // while both of the next two nodes of fast exist, slow takes 1 step and fast takes 2 steps forward
        // in this way, slow will definately point to the mid node (or the first of the 2 mid nodes if there are even number of nodes in the list) at the end of the loop
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // reverse all the ndoes after the slow node, then assign the reversed list back to it
        slow.next = reverseList(slow.next);
        slow = slow.next;

        // after the reverse, compare the reverse list with the original list from the beginning
        while(slow != null) {
            // if any pair of nodes are not equal, return false
            if(head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
};

var reverseList = function(head) {
        // pre will hold the reversed list
        var pre = null;
        // next will be a temporary variable to store the remaining nodes in the list at each loop
        var next = null;

        // while there are nodes remaining in the list
        while(head != null) {
            // temporarily store the remaining list without the current node
            next = head.next;
            // take the current node of the list, append the reversed nodes to it, then assign it back to the reversed list
            head.next = pre;
            pre = head;
            // assign the remaining list back so head points to the new current node, repeat until there are nodes remaining in the list
            head = next;
        }

        return pre;
};



