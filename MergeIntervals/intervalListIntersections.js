/*
https://leetcode.com/problems/interval-list-intersections/

Given two lists of closed intervals, each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.  The intersection of two closed intervals is a set of real numbers that is either empty, or can be represented as a closed interval.  For example, the intersection of [1, 3] and [2, 4] is [2, 3].)


Input:

A = [[0,2],[5,10],[13,23],[24,25]],
B = [[1,5],[8,12],[15,24],[25,26]]


Output:
[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

*/

//.              p1
// A = [[0,2],[6,10],[13,23],[24,25]],

//       p2
// B = [[3,7],[8,12],[15,24],[25,26]]

//[0,2][3,7][6,10][8,12][13,23][15,24][24,25][25,26]

//[6,7][8,10][15,23][24,24][25,25]

/*
Input
[[3,5],[9,20]]
[[4,5],[7,10],[11,12],[14,15],[16,20]]


[[4,11]]
[[1,2],[8,11],[12,13],[14,15],[17,19]]

Output
[[4,5],[9,10]]

Expected
[[4,5],[9,10],[11,12],[14,15],[16,20]]
*/

const intervalIntersection = (a, b) => {
  let result = [];
  let merged = merge(a, b);
  let lastMergeIdx = 0;
  for (let i = 0; i < merged.length - 1; i++) {
    let curr = merged[i];
    let next = merged[i + 1];

    if (curr[1] >= next[0] && curr[1] <= next[1]) {
      result.push([next[0], curr[1]]);
      lastMergeIdx = i + 2;
    }
  }

  if (lastMergeIdx !== 0 && lastMergeIdx < merged.length) {
    result.push(...merged.slice(lastMergeIdx, merged.length));
  }
  return result;
};

function merge(a, b) {
  let merged = [];
  let p1 = 0;
  let p2 = 0;

  while (a[p1] || b[p2]) {
    if (a[p1] === undefined) {
      merged.push(b[p2]);
      p2++;
      continue;
    } else if (b[p2] === undefined) {
      merged.push(a[p1]);
      p1++;
      continue;
    }

    if (a[p1][0] < b[p2][0]) {
      merged.push(a[p1]);
      p1++;
    } else {
      merged.push(b[p2]);
      p2++;
    }
  }

  return merged;
}

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);

console.log(
  intervalIntersection(
    [
      [3, 5],
      [9, 20],
    ],
    [
      [4, 5],
      [7, 10],
      [11, 12],
      [14, 15],
      [16, 20],
    ]
  )
); // [[4,5],[9,10],[11,12],[14,15],[16,20]]
