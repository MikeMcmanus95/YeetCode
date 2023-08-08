/*
Leetcode 203
https://leetcode.com/problems/remove-linked-list-elements/description/
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []

Time: O(n) | Space: O(1)
*/

function removeElements(head, val) {
    while (head && head.val === val) {
        head = head.next;
    }

    let curr = head;

    while (curr && curr.next) {
        if (curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }

    return head;
}