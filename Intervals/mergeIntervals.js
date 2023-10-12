/*
Leetcode 56
https://leetcode.com/problems/merge-intervals/

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Time: O(n log n) | Space: O(log N)
*/

var merge = function(intervals) {
    const intervalsCopy = [...intervals].sort((a, b) => a[0] - b[0]);

    let prev = [null, -1];

    const result = [];

    for (const [currStart, currEnd] of intervals) {
        if (currStart > prev[1]) { //not a merge, just update prev and push into result
            prev = [currStart, currEnd];
            result.push(prev);
        } else { //merge case just update prev[1]
            prev[1] = Math.max(prev[1], currEnd);
        }
    }

    return result;
};