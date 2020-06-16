/*
Input:
An array containing 0's, 1's and 2's

Output:
A sorted version of the array.We cannot count the numbers to recreate the array.

Edge cases:
An array with only 1 single number, an empty array

Brute force approach:
Use an O(n log(n)) sorting algorithm to sort the array in place.

Optimized approach:
Use a two pointers approach


// [0, 0, 1, 2, 2, 2]
l
h
i

Move all 0's before low, and all 2's after high

Time and Space:
O(n) time | O(1) space
*/

function dutchFlagSort(arr) {
  let low = 0,
    high = arr.length - 1,
    i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i++;
      low++;
    } else if (arr[i] === 1) {
      i++;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    }
  }
  return arr;
}
