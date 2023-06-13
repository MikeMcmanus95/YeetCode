/*
Leetcode 128
Given an unsorted array of integers num, return the length of the longest consecutive elements sequence.
You must write an algorithm in O(n) time

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1,2,3,4]. Therefore the length is 4

Time: O(n) | Space: O(n)
*/

function longestConsecutive(nums) {
    const set = new Set();

    for (const num of nums) {
        set.add(num);
    }

    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        let count = 1;

        if (set.has(val-1)) {
            continue;
        }

        while (set.has(++val)){
            count++;
        }

        max = Math.max(count, max);
    }

    return max;
}
