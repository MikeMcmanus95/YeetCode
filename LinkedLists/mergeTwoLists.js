/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
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
