// Time: O(n) | Space: O(1)
function shiftLinkedList(head, k) {
	let listTail = head;
	let listLength = 1;
	while (listTail.next !== null) {
		listTail = listTail.next;
		listLength++;
	}
	let offset = Math.abs(k) % listLength;
	if (offset === 0) return head;

	let newTailPosition = k > 0 ? listLength - offset : offset;
	let newTail = head;
	for (let i = 1; i < newTailPosition; i++) {
		newTail = newTail.next;
	}

	let newHead = newTail.next;
	newTail.next = null;
	listTail.next = head;
	return newHead;
}

// This is the class of the input linked list.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
