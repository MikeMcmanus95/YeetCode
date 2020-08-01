const Heap = require("collections/heap"); // collections.js

// Time O(n * log(k)) | Space O(k)
const findKLargestNumbers = function (nums, k) {
  const minHeap = new Heap([], null, (a, b) => b - a);
  // O(k)
  for (let i = 0; i < k; i++) {
    // O(log(k))
    minHeap.push(nums[i]);
  }
  // O(n - k)
  for (let i = k - 1; i < nums.length; i++) {
    let root = minHeap.peek();
    if (nums[i] > root) {
      minHeap.pop();
      // O(log(k))
      minHeap.push(nums[i]);
    }
  }
  return minHeap.toArray();
};

console.log(
  `Here are the top K numbers: ${findKLargestNumbers([3, 1, 5, 12, 2, 11], 3)}`);
console.log(
  `Here are the top K numbers: ${findKLargestNumbers([5, 12, 11, -1, 12], 3)}`
);

/*
Given array: [3, 1, 5, 12, 2, 11], and K=3

First, let’s insert ‘K’ elements in the min-heap.
After the insertion, the heap will have three numbers [3, 1, 5] with ‘1’ being the root as it is the smallest element.

We’ll iterate through the remaining numbers and perform the above-mentioned two steps if we find a number larger than the root of the heap.

The 4th number is ‘12’ which is larger than the root (which is ‘1’), so let’s take out ‘1’ and insert ‘12’. Now the heap will have [3, 5, 12] with ‘3’ being the root as it is the smallest element.

The 5th number is ‘2’ which is not bigger than the root of the heap (‘3’), so we can skip this as we already have top three numbers in the heap.

The last number is ‘11’ which is bigger than the root (which is ‘3’), so let’s take out ‘3’ and insert ‘11’. Finally, the heap has the largest three numbers: [5, 12, 11]
*/
