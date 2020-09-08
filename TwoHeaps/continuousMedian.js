// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.

class ContinuousMedianHandler {
  constructor() {
    this.median = null;
  }

  insert(number) {
  }

  getMedian() {
    return this.median;
  }
}

class Heap {
	constructor(comparisonFunc, array) {
		this.heap = this.buildHeap(array);
		this.comparisonFunc = comparisonFunc;
		this.length = this.heap.length();
	}

	buildHeap(array) {
		let firstParentIdx = Math.floor(array.length - 1 / 2);
		for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
			this.siftDown(currentIdx, array.length - 1, array);
		}
		return array;
	}

	siftDown(currentIdx, endIdx, heap) {
		let childOneIdx = currentIdx * 2 + 1;
		while (childOneIdx <= endIdx) {
			let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
			let idxToSwap;
			if (childTwoIdx !== -1) {
				if (this.comparisonFunc(heap[childTwoIdx], heap[childOneIdx])) {
					idxToSwap = childTwoIdx;
				} else {
					idxToSwap = childOneIdx;
				}
			} else {
				idxToSwap = childOneIdx;
			}
			if (this.comparisonFunc(heap[idxToSwap], heap[currentIdx])) {
				this.swap(currentIdx, idxToSwap, heap);
				currentIdx = idxToSwap;
				childOneIdx = currentIdx * 2 + 1;
			} else {
				return;
			}
		}
	}
}
