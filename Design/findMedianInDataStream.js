/**
 * initialize your data structure here.
 */
class Heap {
	constructor(comparisonFunc, array) {
		this.heap = this.buildHeap(array);
		this.comparisonFunc = comparisonFunc;
		this.length = this.heap.length;
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

	siftUp(currentIdx, heap) {
		let parentIdx = Math.floor((currentIdx - 1) / 2);
		while (currentIdx > 0) {
			if (this.comparisonFunc(heap[currentIdx], heap[parentIdx])) {
				this.swap(currentIdx, parentIdx, heap);
				currentIdx = parentIdx;
				parentIdx = Math.floor((currentIdx - 1) / 2);
			} else {
				return;
			}
		}
	}

	insert(value) {
		this.heap.push(value);
		this.length++;
		this.siftUp(this.length - 1, this.heap);
	}

	remove() {
		this.swap(0, this.length - 1, this.heap);
		let valueToRemove = this.heap.pop();
		this.length--;
		this.siftDown(0, this.length - 1, this.heap);
		return valueToRemove;
	}

	peek() {
		return this.heap[0];
	}

	swap(i, j, heap) {
		[heap[i], heap[j]] = [heap[j], heap[i]];
	}
}

function MAX_HEAP_FUNC(a, b) {
	return a > b;
}

function MIN_HEAP_FUNC(a, b) {
	return a < b;
}

var MedianFinder = function() {
    this.minHeap = new Heap(MIN_HEAP_FUNC, []);
    this.maxHeap = new Heap(MAX_HEAP_FUNC, []);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.peek());
    this.maxHeap.remove();

    while (this.maxHeap.length < this.minHeap.length) {
        this.maxHeap.insert(this.minHeap.peek());
        this.minHeap.remove();
    }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
   return this.maxHeap.length > this.minHeap.length ? this.maxHeap.peek() : (this.maxHeap.peek() + this.minHeap.peek()) * 0.5;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
