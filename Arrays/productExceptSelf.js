// Leetcode #238: Product of Array Except Self

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// SOLUTION 1: Time: O(n) | Space: O(n)
const productExceptSelf = function(nums) {
  const leftArray = new Array(nums.length);
  const rightArray = new Array(nums.length);
  const resultArray = [];
  leftArray[0] = 1;
  rightArray[rightArray.length - 1] = 1;

  // Construct left array
  for (let i = 1; i < nums.length; i++) {
      leftArray[i] = nums[i - 1] * leftArray[i - 1];
  }

  // Construct right array
  for (let i = nums.length - 2; i >= 0; i--) {
      rightArray[i] = nums[i + 1] * rightArray[i + 1];
  }

  for (let i = 0; i < leftArray.length; i++) {
      resultArray.push(leftArray[i] * rightArray[i]);
  }

  return resultArray;
};

// SOLUTION 2: Constant Space
// Time: O(n) | Space: O(1)
const productExceptSelfEfficient = function(nums) {
  const n = nums.length;
  const resultArray = new Array(n);
  resultArray[0] = 1;

  // Get products from the left
  for (let i = 1; i < n; i++) {
      resultArray[i] = nums[i - 1] * resultArray[i - 1];
  }

  let product = 1
  // Get products from the right
  for (let i = n - 2; i >= 0; i--) {
      product *= nums[i + 1];
      resultArray[i] = product * resultArray[i]
  }

  return resultArray;
};
