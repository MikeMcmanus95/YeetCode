/**
 * @param {number} n
 * @return {number}
 */
// SOLUTION 1: Iterative
// Time: O(n) | Space: O(1)
const climbStairs = function(n) {
  let lastTwo = [1, 2];
  let counter = 3;
  while (counter <= n) {
      let nextFib = lastTwo[0] + lastTwo[1];
      lastTwo[0] = lastTwo[1];
      lastTwo[1] = nextFib;
      counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
};
