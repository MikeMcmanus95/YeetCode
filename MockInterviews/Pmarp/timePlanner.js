/*
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return an empty array.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.

Examples:

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: [] # since there is no common slot whose duration is 12

Hints:
-As with any array traversal, watch out for any array out of bound runtime errors.
-If your peer is stuck, ask for the brute force solution and then ask how they can optimize that.
-If still no progress, remind your peer that the arrays are sorted and ask them how they can use this fact to implement a better solution.
-If your peer can’t improve the brute force solution, ask them whether it’s necessary to check for overlaps between all possible time slot combinations across the two input arrays.
-If your peer seems to be lost, ask them how they’d go about checking whether the intersection of two given time slots, say slotsA[i] and slotsA[j], yields a time slot whose duration is at least dur.
-Then ask what the next step would be if
    -the intersection is at least dur.
    -the intersection is less than dur.
-A solution shouldn’t be considered complete if its time complexity is worse than linear, i.e. O(N+M), where N and M are the lengths of slotsA and slotsB, respectively.
*/

function meetingPlanner(slotsA, slotsB, dur) {
    let p1 = 0;
    let p2 = 0;
    
    while (p1 < slotsA.length && p2 < slotsB.length) {
      let [startA, endA] = slotsA[p1];
      let [startB, endB] = slotsB[p2];
      
      let start = Math.max(startA, startB);
      let end = Math.min(endA, endB);
      
      if (start + dur <= end) {
        return [start, start + dur];
      }
      
      if (endA < endB) {
        p1++;
      } else {
        p2++;
      }
    }
    
    return [];
  }