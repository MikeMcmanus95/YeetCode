/*
Leetcode92
https://leetcode.com/problems/reverse-linked-list-ii/

Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list.
*/

var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(-1, head);
    let curr = head;
    let leftPrev = dummy; //need a pointer to save where you left off so you can rewire at the end
    
    for (let i = 0; i < left - 1; i++) {
        leftPrev = leftPrev.next;
        curr = curr.next;
    }
    
    //usual reverse linked list with p, c and n
    let prev;
    
    for (let i = 0; i < right - left + 1; i++) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    //rewire so that you and return it at the end
    leftPrev.next.next = curr;
    leftPrev.next = prev;
    
    return dummy.next;
    
};