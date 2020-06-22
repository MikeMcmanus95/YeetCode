// Proprietary heaps - can also use CollectionsJS heap
const MinHeap = require('../Trees/Heaps/minHeap');
const MaxBinaryHeap = require('../Trees/Heaps/maxHeap');

class MedianOfAStream {
  constructor() {
    this.maxHeap = new MaxBinaryHeap() // Containing the smaller half of numbers
    this.minHeap = new MinHeap([]); // Containing the larger half of numbers
  }

  insert_num(num) {
    // Insert a number if the num is less than the top ele in maxHeap, or maxHeap top is null
    if (!this.maxHeap.values.length || this.maxHeap.peek() >= num) {
      this.maxHeap.insert(num);
    } else {
      this.minHeap.insert(num);
    }

    // Rebalance the heaps. Max heap should have 1 extra element if total num of elements is odd
    if (this.maxHeap.values.length > this.minHeap.heap.length + 1) {
      this.minHeap.insert(this.maxHeap.extractMax());
    } else if (this.maxHeap.values.length < this.minHeap.heap.length) {
      this.maxHeap.insert(this.minHeap.remove());
    }
  }

  find_median(self) {
    let totalLength = this.minHeap.heap.length + this.maxHeap.values.length;
    if (totalLength % 2 === 0) {
      return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    } else {
      return this.maxHeap.peek();
    }
  }
};



var medianOfAStream = new MedianOfAStream()
medianOfAStream.insert_num(3)
medianOfAStream.insert_num(1)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(5)
console.log(`The median is: ${medianOfAStream.find_median()}`)
medianOfAStream.insert_num(4)
console.log(`The median is: ${medianOfAStream.find_median()}`)
