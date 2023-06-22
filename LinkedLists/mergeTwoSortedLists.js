/*
Leetcode 21
https://leetcode.com/problems/merge-two-sorted-lists/description/
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

 Definition for singly-linked list.
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
  
  Time: O(n) | Space: O(1)
  
 /

var mergeTwoLists = function(l1, l2) {
  let tempNode = new ListNode(0);
  let currNode = tempNode;

  while (l1 && l2) {
      if (l1.val < l2.val) {
          currNode.next = l1;
          l1 = l1.next;
      } else {
          currNode.next = l2;
          l2 = l2.next;
      }
      currNode = currNode.next;
  }
  if (l1 !== null) {
      currNode.next = l1;
      l1 = l1.next;
  }

  if (l2 !== null) {
      currNode.next = l2;
      l2 = l2.next;
  }
  return tempNode.next;
};

// AlgoExpert URL: https://www.algoexpert.io/questions/Merge%20Linked%20Lists

// Time: O(n + m) | Space: O(1)
function mergeLinkedLists(headOne, headTwo) {
	let firstPointer = headOne;
	let secondPointer = headTwo;
	let prevPointer = null;

	while (firstPointer && secondPointer) {
		if (prevPointer === null && secondPointer.value < firstPointer.value) {
			prevPointer = secondPointer;
			secondPointer = secondPointer.next;
			prevPointer.next = firstPointer;
		} else if (secondPointer.value < firstPointer.value) {
			prevPointer.next = secondPointer;
			prevPointer = secondPointer;
			secondPointer = secondPointer.next;
			prevPointer.next = firstPointer;
		} else {
			prevPointer = firstPointer;
			firstPointer = firstPointer.next;
		}
	}

	if (!firstPointer && secondPointer) {
		prevPointer.next = secondPointer;
	}

	return headOne.value > headTwo.value ? headTwo : headOne;
}
