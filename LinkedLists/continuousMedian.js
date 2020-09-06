// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
		this.prev = null;
	}
}


class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	insert(node) {
		if (!this.head) {

		}

		this.length++;
	}
}

class ContinuousMedianHandler {
  constructor() {
    this.numbers = new DoublyLinkedList();
    this.median = null;
  }

  insert(number) {
		this.numbers.push(number);
		let length = this.numbers.length;
		if (length % 2 === 0) {
			let firstIdx = (length / 2) - 1;
			let secondIdx = length / 2;
			this.median = (this.numbers[firstIdx] + this.numbers[secondIdx]) / 2;
		} else {
			let middleIdx = Math.floor(length / 2);
			this.median = this.numbers[middleIdx];
		}
  }

  getMedian() {
    return this.median;
  }
}

// Do not edit the line below.
exports.ContinuousMedianHandler = ContinuousMedianHandler;
