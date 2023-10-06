/*
Leetcode 152 Maximum Product Subarray
https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

//Time: O(n) | Space: O(1)
var maxProduct = function(nums) {
    let maxProd = -Infinity;
    let running = 1;
    
    // moving forward;
    for(let n of nums) {
        if(!running) running = n;
        else running *= n;
        maxProd = Math.max(maxProd, running);
    }
    
    running = 1;
    
    // moving backward
    for(let i = nums.length-1; i >= 0; i--) {
        if(!running) running = nums[i];
        else running *= nums[i];
        maxProd = Math.max(maxProd, running);
    }
    return maxProd
};