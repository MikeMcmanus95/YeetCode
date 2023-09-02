/*
Leetcode 283
Leetcode URL: https://leetcode.com/problems/move-zeroes/
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Time: O(n) | Space: O(1)
*/

function moveZeros(nums) {
  let read = 0,
      write = 0;

  while (read < nums.length) {
    if (nums[read]) {
      nums[write] = nums[read];
      write++;
    }
    read++;
  }

  while (write < nums.length) {
    nums[write] = 0;
    write++;
  }

  return nums;
}


const moveZeroes1 = function (nums) {
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

// Approach 2: LNZE
/*

Input: [0,1,0,3,12]

Output: [1,3,12,0,0]

Approach:
 -Loop over array
 -Keep track of lastNonZeroElementIdx
 -When reaching a number that is a non zero, swap it with LNZE + 1, increment LNZE
 -Continue until loop terminates

Time & Space:
    O(n) Time | O(1) Space

*/

const moveZeroesLNZE = function (nums) {
  // Keep track of lastNonZeroElementIdx
  let lastNonZeroElementIdx = 0;
  // Loop over array
  for (let i = 0; i < nums.length; i++) {
    // When reaching a number that is a non zero, swap it with LNZE
    if (nums[i] !== 0) {
      swap(i, lastNonZeroElementIdx, nums);
      // increment LNZE
      lastNonZeroElementIdx++;
    }
  }
  // Continue until loop terminates
  return nums;
};

const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};
