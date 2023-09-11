/*
Leetcode 239
https://leetcode.com/problems/sliding-window-maximum/description/

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7


Example 2:
Input: nums = [1], k = 1
Output: [1]

*/

var maxSlidingWindow = function(nums, k) {
    const left = [];  //stores *indices*, your queue called left is your window of size k
    const result = [];

    for (let right = 0; right < nums.length; right++) { 
        while (left && nums[left[left.length - 1]] <= nums[right]) { //left queue has a length and the last index's val in the queue is less than the currentVal, get rid of it so you don't have to do repeated work and ensures that the index stored on the left most of the queue is of the greatest value
            left.pop();
        }

        left.push(right);

        // remove first element in the left queue if it's outside the window like in an array of all decreasing numbers, this algorithm will keep doing left.push(right);
        if (left[0] === right - k) {
            left.shift();
        }

        // if window has k elements add to results (first k-1 windows have < k elements because we start from empty window and add 1 element each iteration)
        if (right >= k - 1) {
            result.push(nums[left[0]]);
        }
    }
    return result;    
};