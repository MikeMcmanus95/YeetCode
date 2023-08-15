/*
Leetcode 445
https://leetcode.com/problems/add-two-numbers-ii/description/

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

//When you're given two numbers to read forward, instead of reversing the LL you can use a stack
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    
    let result = null;
    let carry = 0;
    
    while (stack1.length || stack2.length) {
        let sum = (stack1.length ? stack1.pop() : 0) + (stack2.length ? stack2.pop() : 0) + carry;
        carry = +(sum >= 10); //if the expression is true +1, if the expression is false then carry = 0
        //or you can do carry = Math.floor(sum/10)
        
        result = new ListNode(sum % 10, result);
    }
    
    if (carry) {
        result = new ListNode(1, result);
    }
    
    return result;
};