/**
 * @param {number[]} T
 * @return {number[]}
 */
// Brute Force
// Time: O(n^2) | Space: O(1)
const dailyTemperatures = function(T) {
  const resultArr = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
      let currentTemp = T[i];
      let count = 0;
      let j = i;
      while (j < T.length) {
          if (currentTemp < T[j]) break;
          count++;
          j++;
      }
      if (currentTemp < T[j]) resultArr[i] = count;
  }
  return resultArr;
};
