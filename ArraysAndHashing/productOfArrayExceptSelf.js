/*
Leetcode #238: Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
 */

// Time: O(n) | Space: O(1)
const productExceptSelfEfficient = function(nums) {
  const result = new Array(nums.length).fill(0);
  let prefix = 1;
  let postfix = 1;

  //write prefix into the result box, then update prefix variable
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  //calculate and update with what's in the result box then update postfix variable
  for (let i = nums.length; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  return result;
};
