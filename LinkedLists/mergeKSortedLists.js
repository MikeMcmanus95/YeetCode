/*
Leetcode 23
https://leetcode.com/problems/merge-k-sorted-lists/description/
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

Time: O(N log k) where k is the # of| Space: O(1)
*/

function mergeKLists(lists) {
    if (lists.length === 0) return null;

    return mergeHelper(lists, 0, lists.length - 1);
}

function mergeHelper(lists, left, right) {
    if (left === right) return lists[left];

    const mid = Math.floor((left + right) / 2);

    let list1 = mergeHelper(lists, left, mid);
    let list2 = mergeHelper(lists, mid + 1, right);

    return mergeTwoLists(list1, list2);
}

function mergeTwoLists(list1, list2) {
    let p1 = list1;
    let p2 = list2;
    let dummy = new ListNode(-1);
    let curr = dummy;

    while (p1 && p2) {
        if (p1.val <= p2.val) {
            curr.next = p1;
            p1 = p1.next;
        } else {
            curr.next = p2;
            p2 = p2.next;
        }
        curr = curr.next;
    }

    if (p1 || p2) {
        curr.next = p1 || p2;
    }

    return dummy.next;
}