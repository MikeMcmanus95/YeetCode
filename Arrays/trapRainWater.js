// Intial Brute Force - Exceeds Leetcode time
// Time: O(n ^ 2) | Space: O(1)
const trap = function(height) {
  let totalWater = 0;
  let zeroCount = 0;

  while (zeroCount < height.length) {
      zeroCount = 0;
      for (let i = 0; i < height.length; i++) {
          if (height[i] === 0) {
              zeroCount++;
          }

          if (height[i] === 0 && height[i - 1]) {
              let j = i;
              while (height[j] === 0) {
                  j++;
              }
              if (height[j]) totalWater += j - i;
          }
      }

      for (let i = 0; i < height.length; i++) {
          if (height[i] > 0) height[i]--;
      }
  }
  return totalWater;
};

// Solution 2: Brute Force - Accepted by Leetcode
// Time: O(n ^ 2) | Space: O(1)
const trap = function(height) {
  let totalWater = 0;
  for (let i = 1; i < height.length; i++) {
      let leftMax = getMax(height, 0, i + 1);
      let rightMax = getMax(height, i, height.length);
      let waterAndBuilding = Math.min(leftMax, rightMax);
      totalWater += waterAndBuilding - height[i];
  }
  return totalWater
};

const getMax = function(array, startIdx, endIdx) {
  let maxValue = -Infinity;
  for (startIdx; startIdx < endIdx; startIdx++) {
      if (array[startIdx] > maxValue) maxValue = array[startIdx];
  }
  return maxValue;
}
