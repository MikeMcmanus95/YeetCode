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

// SOLUTION 2: (Left and Right / Peaks and Valleys)
// O(n) Time | O(n) Space
function minRewards2(scores) {
  let rewards = Array(scores.length).fill(1);
  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) {
      rewards[i] = rewards[i - 1] + 1;
    }
  }

  for (let j = scores.length - 2; j >= 0; j--) {
    if (scores[j] > scores[j + 1]) {
      rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
    }
  }

  return rewards.reduce((ele, accum) => ele + accum);
}


console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5])) // 25
