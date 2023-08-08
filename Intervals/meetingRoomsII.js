/*
Leetcode 253
https://leetcode.com/problems/meeting-rooms-ii/description/

Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], return the minimum number of conference rooms required.

Time: O(n log n) | Space: O(n)
*/

var minMeetingRooms = function(intervals) {
    const startTimes = intervals.map(x => x[0]);
    const endTimes = intervals.map(x => x[1]);

    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);

    let roomsNeeded = 0;
    let end = 0;

    for (let start = 0; start < startTimes.length; start++) {
        if (startTimes[start] >= endTimes[end]) {
            roomsNeeded--;
            end++;
        }
        roomsNeeded++;
    }

    return roomsNeeded;
};