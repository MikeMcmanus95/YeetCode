/*
Leetcode 560
https://leetcode.com/problems/subarray-sum-equals-k/description/

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.


Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2

Example 3:
Input: nums = [1,5,2,3,10], k = 10
Output: 2

Time: O(n) | Space: O(n)
*/

var subarraySum = function(nums, k) {
    const prefixMap = { 0:1 };
    let currSum = 0,
        count = 0;

    for (const num of nums) {
        currSum += num;

        let diff = currSum - k;

        if (prefixMap[diff]) {
            count += prefixMap[diff];
        }

        if (!prefixMap[currSum]) {
            prefixMap[currSum] = 1;
        } else {
            prefixMap[currSum]++;
        }
    }

    return count;
};
