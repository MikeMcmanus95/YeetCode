// Leetcode URL: https://leetcode.com/problems/reverse-linked-list/submissions/

function reverseLinkedList(head) {
  let current = head;
	let next;
	let prev = null;
	while (current) {
		next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}
	return prev;
}
