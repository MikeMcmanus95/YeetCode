class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

/*
Input:
  An array of intervals, as described by the interval class

Output:
  An array of merged intervals

Approach:
  -Sort the intervals array such that a.start <= b.start
  -Set the start and end of the first interval to a variable
  -Loop over the intervals starting at idx 1
    -if interval[i].start < end
      -We have overlap, merge the intervals with the greatest end value
    -else
      -No overlap, add the previous interval (start, end) and reset start and
      end to the next interval
  -Add the final interval in the array
  -Return newly merged intervals array

Time and Space:
  O(n log(n)) Time | O(1) Space, additional
*/

const merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a.start - b.start);
  const mergedIntervals = []
  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start <= end) {
      end = Math.max(intervals[i].end, end);
    } else {
      mergedIntervals.push(new Interval(start, end));
      start = intervals[i].start;
      end = intervals[i].end;
    }
  }
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
};

merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)


merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
result = "";
for (i = 0; i < merged_intervals.length; i++) {
  result += merged_intervals[i].get_interval() + " ";
}
console.log(`Merged intervals: ${result}`)
