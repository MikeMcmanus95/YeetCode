/*
Leetcode 143
https://leetcode.com/problems/reorder-list/description/

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.


Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

Time: O(n) | Space: O(1)
*/

function reorderList(head) {
    let slow = head;
    let fast = head.next;
    
    //find the middle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    

    let curr = slow;
    let prev = null;

    //reverse the second half
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    
    let c1 = head;
    let c2 = prev;

    
    while (c1 && c2) {
        let n1 = c1.next;
        let n2 = c2.next;
        
        c1.next = c2;
        c2.next = n1;
        
        c1 = n1;
        c2 = n2;
    }
};