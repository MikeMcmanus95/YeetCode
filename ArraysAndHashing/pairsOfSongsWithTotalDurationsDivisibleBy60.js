/*
Leetcode 1010
https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

You are given a list of songs where the ith song has a duration of time[i] seconds.

Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

Example 1:
Input: time = [30,20,150,100,40]
Output: 3
Explanation: Three pairs have a total duration divisible by 60:
(time[0] = 30, time[2] = 150): total duration 180
(time[1] = 20, time[3] = 100): total duration 120
(time[1] = 20, time[4] = 40): total duration 60

Example 2:
Input: time = [60,60,60]
Output: 3
Explanation: All three pairs have a total duration of 120, which is divisible by 60.

Time: O(1) | Space: 0(1) because the size of the array can only be as large as size 60 because of the modulo
*/

var numPairsDivisibleBy60 = function (time) {
    let count = 0;
    const map = {}; //complement : frequency
  
    // loop through time array
    for (const songTime of time) {
      // get our modulo remainder
      const remainder = songTime % 60;
  
      // get our possible complement
      const complement = remainder === 0 ? 0 : 60 - remainder;
  
      // if possible is in map, add that num to count or add 0
      count += map[complement] ? map[complement] : 0;
  
      // update remainder
      map[remainder] = map[remainder] ? map[remainder] + 1 : 1;
    }
  
    return count;
  };