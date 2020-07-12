const Heap = require('collections/heap'); // collections.js

const findKLargestNumbers = function (nums, k) {
  const minHeap = new Heap([], null, ((a, b) => b - a));
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }
  for (let i = k - 1; i < nums.length; i++) {
    let root = minHeap.peek();
    if (nums[i] > root) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  return minHeap.toArray();
};

console.log(`Here are the top K numbers: ${findKLargestNumbers([3, 1, 5, 12, 2, 11], 3)}`)
console.log(`Here are the top K numbers: ${findKLargestNumbers([5, 12, 11, -1, 12], 3)}`)
