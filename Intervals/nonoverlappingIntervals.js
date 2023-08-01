/*
Leetcode 435
https://leetcode.com/problems/non-overlapping-intervals/description/
Given an array of intervals intervals where intervals[i] = [starti, endi], 
return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Time: O(n) | Space: O(1)
*/

var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let prevEnd = intervals[0][1];
    let removeCounter = 0;

    for (let i = 1; i < intervals.length; i++) {
        let [currStart, currEnd] = intervals[i];

        if (currStart >= prevEnd) { //keep it and update prevEnd
            prevEnd = currEnd;
        } else { //remove it
            removeCounter++;
            prevEnd = Math.min(prevEnd, currEnd);
        }
    }

    return removeCounter;
};