// AlgoExpert URL: https://www.algoexpert.io/questions/Four%20Number%20Sum
// O(n^2) Time Avg, O(n^3) Time Worst Case/Edge Case | O(n) space
function fourNumberSum(array, targetSum) {
  let pairs = {};
  let quadruplets = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let difference = targetSum - (array[i] + array[j]);
      if (pairs[difference]) {
        for (const pair of pairs[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      let sum = array[k] + array[i];
      if (!pairs[sum]) {
        pairs[sum] = [[array[k], array[i]]];
      } else {
        pairs[sum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
}
