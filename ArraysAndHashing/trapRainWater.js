/*
You are given an integer array height of length n. There are n vertical lines drawn 
such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container 
contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.
*/


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
const trapRain = function(height) {
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


// Solution 3: Precompute left and right max
// Time: O(n) | Space: O(n)
function trapRainPrecomp(height) {
  const [leftMax, rightMax] = calcMax(height);
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    let waterAndBuilding = Math.min(leftMax[i], rightMax[i]);
    totalWater += waterAndBuilding - height[i];
  }
  return totalWater;
}

function calcMax(array) {
  const n = array.length;
  const leftMax = new Array(n);
  const rightMax = new Array(n);
  leftMax[0] = array[0];
  rightMax[n - 1] = array[n - 1];

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], array[i]);
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], array[i])
  }

  return [leftMax, rightMax];
}

// Solution 3: Optimal Solution
// Time: O(n) | Space: O(1)
function trapRainWater(height) {
  const n = height.length;
  if (n < 3) return 0;
  let totalWater = 0, i = 0, j = n;
  let leftMax = height[0], rightMax = height[n - 1];
  while (i < j) {
    leftMax = Math.max(height[i], leftMax[i]);
    rightMax = Math.max(height[j], rightMax[j]);

    if (leftMax <= rightMax) {
      totalWater += (leftMax - height[i]);
      i++;
    } else {
      totalWater += (rightMax - height[j]);
      j--;
    }
  }
  return totalWater;
}
