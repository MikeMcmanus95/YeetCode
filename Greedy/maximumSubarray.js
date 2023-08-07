/*
Leetcode 53
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the 
subarray with the largest sum, and return its sum.

Kandane's Theory https://www.youtube.com/watch?v=86CQq3pKSUw

Time: O(n) | Space: O(1)
*/


var maxSubArray = function(nums) {
    let globalMax = currMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);

        if (currMax > globalMax) {
            globalMax = currMax;
        }
    }

    return globalMax;
};

//rewritten with Math.max
var maxSubArray = function(nums) {
    let globalMax = currMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currMax = Math.max(nums[i], currMax + nums[i]);
        globalMax = Math.max(globalMax, currMax);
    }

    return globalMax;
};