/*
Leetcode URL: https://leetcode.com/problems/move-zeroes/
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

const moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      for (let s = i + 1; s < nums.length; s++) {
        if (nums[s] !== 0) {
          swap(nums, i, s);
          break;
        }
        if (s === nums.length - 1) return;
      }
    }
  }
};

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};
