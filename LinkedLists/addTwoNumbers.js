/*
Leetcode URL: https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807
*/

const addTwoNumbers = function (l1, l2) {
  let resultHead = new ListNode(0);
  let resultHeadPointer = resultHead;
  let carry = false;
  while (l1 !== null || l2 !== null) {
    if (l1 && l2) {
      resultHeadPointer.val = l1.val + l2.val;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 === null) {
      resultHeadPointer.val = l2.val;
      l2 = l2.next;
    } else {
      resultHeadPointer.val = l1.val;
      l1 = l1.next;
    }

    if (carry) {
      resultHeadPointer.val += 1;
      carry = false;
    }
    if (resultHeadPointer.val >= 10) {
      carry = true;
      resultHeadPointer.val = resultHeadPointer.val % 10;
    }

    if (l1 || l2) {
      resultHeadPointer.next = new ListNode(0);
      resultHeadPointer = resultHeadPointer.next;
    }
  }
  if (carry) {
    resultHeadPointer.next = new ListNode(1);
  }
  return resultHead;
};
