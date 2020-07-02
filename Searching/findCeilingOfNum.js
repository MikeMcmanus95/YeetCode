/*
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.
*/
// Time O(log n) | Space O(1)
const searchCeilingOfNumber = function (arr, key) {
  let left = 0, right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (left === right) {
      return arr[mid] > key ? mid : -1;
    }
    if (arr[mid] < key) {
      left = mid + 1;
    }
    else if (arr[mid] > key) {
      right = mid;
    } else {
      return mid;
    }
  }
};


console.log(searchCeilingOfNumber([4, 6, 10], 6))
console.log(searchCeilingOfNumber([1, 3, 8, 10, 15], 12))
console.log(searchCeilingOfNumber([4, 6, 10], 17))
console.log(searchCeilingOfNumber([4, 6, 10], -1))
