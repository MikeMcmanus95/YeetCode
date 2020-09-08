// AlgoExpert URL: https://www.algoexpert.io/questions/Find%20Loop
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space
function findLoop(head) {
  let firstPointer = head;
	let secondPointer = head;

	while (firstPointer !== null) {
		firstPointer = firstPointer.next;
		secondPointer = secondPointer.next.next;
		if (firstPointer === secondPointer) break;
	}

	firstPointer = head;
	while (firstPointer !== secondPointer) {
		firstPointer = firstPointer.next;
		secondPointer = secondPointer.next;
	}
	return firstPointer;
}
