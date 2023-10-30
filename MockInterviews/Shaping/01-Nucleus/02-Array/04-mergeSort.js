/*
Given an unsorted array, perform merge sort in ascending order.

Examples:
• Given an array: [1] // returns [1]
• Given an array: [3, 1, 2, 4] // returns [1, 2, 3, 4]

Time <= 30 min
*/

function mergeSort(array) {
    function merge(start, half, count) {
      // Copy the two subarrays into some temporary space
      // so we can overwrite the original array. This will
      // use O(n) space for the duration of a call to merge()
      const right = [], left = [];
      let i = start;
      for (; i < start + half; i++) {
        left.push(array[i]);
      }
      for (; i < start + count; i++) {
        right.push(array[i]);
      }
    
      let r = 0, l = 0;
    
      while (r < right.length && l < left.length) {
        if (left[l] < right[r]) {
          array[start++] = left[l++];
        } else {
          array[start++] = right[r++];
        }
      }
    
      while (r < right.length) {
        array[start++] = right[r++];
      }
    
      while (l < left.length) {
        array[start++] = left[l++];
      }
    }
  
    function sort(start, count) {
      if (count <= 1) {
        return;
      }
  
      const halfCount = Math.floor(count / 2);
      sort(start, halfCount);
      sort(start + halfCount, count - halfCount);
      merge(start, halfCount, count);
    }
  
    sort(0, array.length);
    return array;
  }