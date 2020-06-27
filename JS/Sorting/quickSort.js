function pivot(array, start = 0, end = array.length - 1) {
  let pivot = array[start];
  let swapIdx = start;
  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      // If our current element is less than our pivot element
      swapIdx++; // We increment our pivot index, placing it just ahead of the pivot (in first iteration)
      swap(array, swapIdx, i); // Then we swap current with our pivot index.
      console.log(array);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
}

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

console.log(pivot([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));

function quickSort(array, left = 0, right = array.length - 1) {
  // array is always the same, where left and right are constantly changing
  // if left is equal to right, we know we're looking at one element
  if (left < right) {
    let pivotIdx = pivot(array, left, right); // 3
    // left subarray
    quickSort(array, left, pivotIdx - 1);
    // right subarray
    quickSort(array, pivotIdx + 1, right);
  }
  return array;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
