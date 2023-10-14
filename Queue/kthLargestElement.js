/*
Leetcode 215
https://leetcode.com/problems/kth-largest-element-in-an-array/description/

Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

//Time: O(N * logk) where k is what you're looking for so this is a smaller heap to manage
//Space: O(k)

var findKthLargest = function(nums, k) {
    let heap = new MinPriorityQueue();
    
    for (let num of nums) {
        heap.enqueue(num);
        if (heap.size() > k) {
            heap.dequeue();
        }
    }
    
    return heap.front().element;
};