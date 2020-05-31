// AlgoExpert URL: https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent

// Solution 1:
// Time O(n) | Space O(n)
function maxSubsetSumNoAdjacent(array) {
  let maxSums = Array(array.length).fill(0);
  if (array.length >= 2) {
    maxSums[0] = array[0];
    maxSums[1] = Math.max(array[0], array[1]);
  } else if (array.length === 1) return array[0];
  else return 0;
  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], array[i] + maxSums[i - 2]);
  }
  return maxSums[maxSums.length - 1]
}


// Solution 2:
// Time O(n) | Space O(1)
// Time: O(n) | Space: O(1)
function maxSubsetSumNoAdjacent(array) {
  if (array.length <= 0) return 0;
  else if (array.length === 1) return array[0];
  else if (array.length === 2) return Math.max(array[0], array[1]);

  let first = Math.max(array[0], array[1]);
  let second = array[0];
  let current;

  for (let i = 2; i < array.length; i++) {
    current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return current;
}
