/*
Leetcode 53
https://leetcode.com/problems/maximum-subarray/

Given an integer array nums, find the 
subarray with the largest sum, and return its sum.

Kandane's Theory https://www.youtube.com/watch?v=86CQq3pKSUw

Time: O(n) | Space: O(1)
*/

// Rewritten to understand Kandane's Theory a bit better
// Which asks at a specific index, what's larger? the current local val? or the current local val plus the previuos sum
// This will give you the current and local max, then you use that to update your global max variable
var maxSubArray = function(nums) {
    let tempMax = globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];
        let prev = curr + tempMax;

        tempMax = Math.max(curr, prev);
        globalMax = Math.max(tempMax, globalMax);
    }

    return globalMax;
};

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