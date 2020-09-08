const Heap = require('../Trees/Heaps/Heap');

// Time: O(log(n)) | O(n) Space
class ContinuousMedianHandler {
  constructor() {
    this.median = null;
		this.lowerHeap = new Heap(MAX_HEAP_FUNC, []);
		this.higherHeap = new Heap(MIN_HEAP_FUNC, []);
  }

	// O(log(n)) time
  insert(number) {
		if (number < this.lowerHeap.peek()) {
			this.lowerHeap.insert(number);
		} else {
			this.higherHeap.insert(number);
		}

		if (this.lowerHeap.length < this.higherHeap.length - 1) {
			this.rebalanceHeaps(this.lowerHeap, this.higherHeap);
		} else if (this.higherHeap.length < this.lowerHeap.length - 1) {
			this.rebalanceHeaps(this.higherHeap, this.lowerHeap);
		}

		const totalLength = this.lowerHeap.length + this.higherHeap.length;
		let lowerHeapMax = this.lowerHeap.peek();
		let higherHeapMin = this.higherHeap.peek();
		if (totalLength % 2 == 0) {
			this.median = (lowerHeapMax + higherHeapMin) / 2;
		} else {
			this.median = this.lowerHeap.length > this.higherHeap.length ? lowerHeapMax : higherHeapMin;
		}
  }

	//O(1) time
	rebalanceHeaps(smallerHeap, largerHeap) {
		while (smallerHeap.length + 1 < largerHeap.length) {
			let valueToInsert = largerHeap.remove();
			smallerHeap.insert(valueToInsert);
		}
	}

	//O(1) time
  getMedian() {
    return this.median;
  }
}

function MAX_HEAP_FUNC(a, b) {
	return a > b;
}

function MIN_HEAP_FUNC(a, b) {
	return a < b;
}
