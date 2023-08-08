/*
Leetcode 55
https://leetcode.com/problems/jump-game/description/
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Time: Space:

Time: O(n) | Space: O(1)
*/

var canJump = function(nums) {
    let goal = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= goal) {//where we are plus the max length value, can it reach the goal?
            goal = i; //if it's true, move the goal post closer to 0th index
        }
    }

    return goal === 0;
};