// AlgoExpert URL: https://www.algoexpert.io/questions/Min%20Rewards

// SOLUTION 1: (Naive)
// O(n^2) Time | O(n) Space
function minRewards(scores) {
  let totalRewards = Array(scores.length).fill(0);
  totalRewards[0] = 1;
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      totalRewards[i] = totalRewards[i - 1] + 1;
    } else {
      totalRewards[i] = 1;
      let j = i - 1;
      while (j >= 0 && scores[j] > scores[j + 1]) {
        totalRewards[j] = Math.max(totalRewards[j], totalRewards[j + 1] + 1);
        j--;
      }
    }
  }
  return totalRewards.reduce((ele, accum) => accum + ele);
}
