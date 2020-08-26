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

// Linear Solution Using a Stack
// Video Explanation: https://www.youtube.com/watch?v=WGm4Kj3lhRI
// Time: O(n) | Space: O(n)
const dailyTemperaturesLinear = function(T) {
  const resultArr = new Array(T.length);
  const stack = [];
  let currentIdx = T.length - 1;
  while (currentIdx >= 0) {
      let currentTemp = T[currentIdx];
      while (stack.length && currentTemp >= stack[stack.length - 1][1]) {
          stack.pop();
      }
      if (!stack.length) resultArr[currentIdx] = 0;
      else resultArr[currentIdx] = stack[stack.length - 1][0] - currentIdx;
      stack.push([currentIdx, currentTemp]);
      currentIdx--;
  }
  return resultArr;
};
