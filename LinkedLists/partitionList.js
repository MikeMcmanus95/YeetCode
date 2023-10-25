/*
Leetcode 86 - Partition List

Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]

*/
//Approach: use two dummy nodes, one to contain nodes less than target at the other is to
//contain nodes greater than target. It has an unzippering effect when you walk through this
//At the end to straighten it out, lessDummy.next = more.next and morePtr.next = null
var partition = function(head, x) {
    const smallerSentinel = new ListNode(-1);
    const moreSentinel = new ListNode(-1);
    
    let smallP = smallerSentinel;
    let moreP = moreSentinel;
    let curr = head;
    
    while (curr) {
        if (curr.val < x) {
            smallP.next = curr;
            smallP = curr;
        } else {
            moreP.next = curr;
            moreP = curr;
        }
        curr = curr.next;
    }
    
    smallP.next = moreSentinel.next;
    moreP.next = null;
    
    return smallerSentinel.next;
};