class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function (intervals, new_interval) {
  let mergedIntervals = [];
  let i = 0;

  // Loop over intervals array until we reach our merge spot
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    mergedIntervals.push(intervals[i]);
    i++;
  }

  // From our merge spot, loop over every interval that fits in between
  while (i < intervals.length && intervals[i].start < new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i++;
  }

  // Push the newly merged interval
  mergedIntervals.push(new_interval);

  // Add the rest of the intervals after the merge spot
  while (i < intervals.length) {
    mergedIntervals.push(intervals[i]);
    i++;
  }
  return mergedIntervals;
};

process.stdout.write('Intervals after inserting the new interval: ');
let result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 6));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([
  new Interval(1, 3),
  new Interval(5, 7),
  new Interval(8, 12),
], new Interval(4, 10));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();
