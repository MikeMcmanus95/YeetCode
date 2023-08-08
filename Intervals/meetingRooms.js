/*
Leetcode 252
https://leetcode.com/problems/meeting-rooms/description/

Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.

Time: O(n log n) | Space: O(n)
*/

var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length - 1; i++) {
        let lastEnd = intervals[i][1];
        let currStart = intervals[i+1][0];

        if (lastEnd > currStart) return false;
    }

    return true;
};