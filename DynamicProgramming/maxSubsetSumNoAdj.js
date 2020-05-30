// AlgoExpert URL: https://www.algoexpert.io/questions/Max%20Subset%20Sum%20No%20Adjacent
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
