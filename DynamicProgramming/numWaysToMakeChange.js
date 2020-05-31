// AlgoExpert URL: algoexpert.io/questions/Number%20Of%20Ways%20To%20Make%20Change

// SOLUTION 1:
// Time O(nd) | Space O(n)
function numberOfWaysToMakeChange(n, denoms) {
  const ways = Array(n + 1).fill(0);
  ways[0] = 1;
  for (let i = 0; i < denoms.length; i++) {
    for (let j = 1; j < ways.length; j++) {
      if (denoms[i] <= j) {
        ways[j] += ways[j - denoms[i]];
      }
    }
  }
  return ways[n];
}
