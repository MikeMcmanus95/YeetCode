/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*

Approach:
    (Brute Force)
    -Loop over array
        -get all values between array[i] and array[i + 1]
            -add to missingNums array
            -Break when missingNums.length = k

    (Constant Space)

Time and Space:
    O(n + k) time | O(k) space


Notes:
    A = [1,2,4], K = 3

*/
const missingElement = function(nums, k) {
  let missingNumsCount = 0;
  let idx = 0;
  let currentNum = 0;
  let lastNum = nums[nums.length - 1];
  let difference = 0;
  while (missingNumsCount < k) {
      currentNum = nums[idx] || lastNum;
      difference = nums[idx + 1] - currentNum;
      while (difference > 1) {
          currentNum++;
          difference--;
          missingNumsCount++;
          if (missingNumsCount === k) break;
      }
      idx++;
      if (idx >= nums.length) {
          currentNum++;
          lastNum++;
          missingNumsCount++;
      }
  }
  return currentNum;
};


const missingElementConstant = function(nums, k) {
  let missingNumsCount = 0;
  let idx = 0;
  let currentNum = 0;
  let lastNum = nums[nums.length - 1];
  let difference = 0;
  while (missingNumsCount < k) {
      currentNum = nums[idx] || lastNum;
      difference = nums[idx + 1] - currentNum;
      while (difference > 1) {
          currentNum++;
          difference--;
          missingNumsCount++;
          if (missingNumsCount === k) break;
      }
      idx++;
      if (idx === nums.length) {
          return lastNum + k - missingNumsCount;
      }
  }
  return currentNum;
};
