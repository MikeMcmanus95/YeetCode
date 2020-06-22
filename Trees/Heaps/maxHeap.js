class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(value, this.values.length - 1);
  }

  extractMax() {
    this.swap(0, this.values.length - 1);
    let oldRoot = this.values.pop();
    this.sinkDown();
    return oldRoot;
  }

  peek() {
    return this.values[0];
  }

  bubbleUpRecursive(value, index) {
    let parentIdx = Math.floor(index / 2) - 1;
    if (this.values[parentIdx] < value) {
      this.swap(index, parentIdx);
      this.bubbleUpRecursive(value, parentIdx);
    }
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element < parent) break;
      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  sinkDown() {
    let parentIdx = 0;
    while (true) {
      let parent = this.values[parentIdx];
      let leftIdx = parentIdx * 2 + 1;
      let rightIdx = parentIdx * 2 + 2;
      // Find the larger of the two children in advance
      let largestIdx =
        this.values[leftIdx] > this.values[rightIdx] ? leftIdx : rightIdx;
      // Parent greater than both children? Swap index with the larger one
      if (parent < this.values[leftIdx] && parent < this.values[rightIdx]) {
        this.swap(parentIdx, largestIdx);
        parentIdx = largestIdx;
      } else if (parent < this.values[leftIdx]) {
        this.swap(parentIdx, leftIdx);
        parentIdx = leftIdx;
      } else if (parent < this.values[rightIdx]) {
        this.swap(parentIdx, rightIdx);
        parentIdx = rightIdx;
      } else break;
    }
  }

  swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }
}

// const maxHeap = new MaxBinaryHeap();
// maxHeap.insert(41);
// maxHeap.insert(39);
// maxHeap.insert(33);
// maxHeap.insert(18);
// maxHeap.insert(27);
// maxHeap.insert(12);
// maxHeap.insert(55);
// maxHeap.insert(100);
// maxHeap.extractMax();

// console.log(maxHeap);

module.exports = MaxBinaryHeap;
