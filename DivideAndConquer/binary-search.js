/* Implemenetation: use a min/max pointer, that rearranges itself based on the middle value of the array
  if your value is greater than middle, increase left to the index of middle. Thus, searching only
  the right side of the array. Same for left. Only works if array is sorted.

  Time: O(n) Space: O(1)
*/
// [1,2,3,4,5,8,9,11,14,18] // 11

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    // Mid constantly updates based on what your min and max values are
    let mid = Math.floor((min + max) / 2);
    let currentElement = arr[mid];
    if (target > currentElement) {
      // Here we set a new mid when our current element is less than our target val.
      // We know that none of the elements before this index could be our target.
      min = mid + 1;
    } else if (target < currentElement) {
      // We also set our max value in case our current element is greater than the target.
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 8, 9, 11, 14, 18], 14));
