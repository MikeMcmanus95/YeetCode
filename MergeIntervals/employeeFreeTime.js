/**
 * // Definition for an Interval.
 * function Interval(start, end) {
 *    this.start = start;
 *    this.end = end;
 * };
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
// Solution 1: Line Sweep
// Time: O(C log(C)) | Space: O(C) where C is the total num of intervals across all employees
const employeeFreeTime = function(schedule) {
  let resultArr = [];
  let intervals = [];

  // Grab all intervals of work time and add to intervals array
  for (let employee of schedule) {
      for (let interval of employee) {
          intervals.push(interval);
      }
  }

  // Sort the intervals by start time
  intervals.sort((a, b) => a.start - b.start);

  // Find the gaps between remaining intervals and add to result array
  let current = intervals[0];
  for (let interval of intervals) {
      if (current.end < interval.start) {
          resultArr.push(new Interval(current.end, interval.start));
          current = interval;
      } else {
          current = current.end < interval.end ? interval : current;
      }
  }

  return resultArr;
};
