// AlgoExpert URL: https://www.algoexpert.io/questions/Kadane's%20Algorithm
// Time O(n) | Space O(1)
function kadanesAlgorithm(array) {
  let currentSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < array.length; i++) {
    currentSum += array[i];
    currentSum = Math.max(currentSum, array[i]);
    if (currentSum > maxSum) maxSum = currentSum;
  }
  return maxSum;
}
