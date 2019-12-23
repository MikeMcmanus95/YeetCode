// Write a function called max subarray sum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive numbers in the array.

function maxSubarraySum(array, n) {
  let maxSum = 0;
  let start = 0;
  let end = 1;
  let tempSum = array[start];
  for (end; end < n; end++) {
    tempSum += array[end];
  }
  for (end; end < array.length; end++) {
    tempSum -= array[start];
    tempSum += array[end];
    start++;
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 5, 7, 3, 9, 11, 8], 3));
