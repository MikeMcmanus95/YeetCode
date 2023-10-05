/* 
Leetcode 17 Two Sum
https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Solution: use a map where the left side if the value and the right side is the index

Time: O(n) | Space O(n)
*/


function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        let currentVal = nums[i]; //2
        let another = target - currentVal; //7

        if (another in map) {
            return [i, map[another]];
        }

        map[currentVal] = i;
    }
};

