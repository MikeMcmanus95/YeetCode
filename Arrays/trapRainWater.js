// Brute Force
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
