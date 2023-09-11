/*
Leetcode 33
https://leetcode.com/problems/search-in-rotated-sorted-array/description/

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1
*/

var search = function(nums, target) {
    let low = 0,
        high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) return mid;
    
        if (nums[low] <= nums[mid]) { //working in the left half
            if (nums[low] <= target && target < nums[mid]) { //if target is within the bounds of low and mid, move high to get rid of the right half
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { //working in the right half
            if (nums[mid] < target && target <= nums[high]) { //if target is within the bounds of mid and high, move low to get rid of the left half
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};