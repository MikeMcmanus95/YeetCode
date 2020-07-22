/**
 *
 If the town judge exists, then:

  The town judge trusts nobody.
  Everybody (except for the town judge) trusts the town judge.
  There is exactly one person that satisfies properties 1 and 2.

  Example 1:
  Input: N = 2, trust = [[1,2]]
  Output: 2

  Example 2:
  Input: N = 3, trust = [[1,3],[2,3]]
  Output: 3

  Example 3:
  Input: N = 3, trust = [[1,3],[2,3],[3,1]]
  Output: -1

  Example 4:
  Input: N = 3, trust = [[1,2],[2,3]]
  Output: -1

  Example 5:
  {1: [3, 4], 2: [3, 4], 3: [], 4: [3]}
  Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
  Output: 3

  // Approach:
    -Build a graph based on N. Each key will have an empty array as its value
    -Iterate through pairs, pos1 = key, pos2 = key[value]
    -Iterate through obj, find key with [] value = potentialJudge
    -Iterate through obj, check if each key has value of potentialJudge

    Time / Space:
    O(n^2) time | O(n) space
 */

function findJudge(n, pairs) {
  let count = new Array(n + 1).fill(0);

  for (let i = 0; i < pairs.length; i++) {
    let truster = pairs[i][0];
    let trustee = pairs[i][1];

    count[truster]--;
    count[trustee]++;
  }

  for (let i = 1; i < count.length; i++) {
    if (count[i] === n - 1) return i;
  }

  return -1;
}

console.log(findJudge(2, [[1, 2]])); // 2
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
); // 3
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
); // -1
console.log(
  findJudge(3, [
    [1, 2],
    [2, 3],
  ])
); // -1
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
); // 3
