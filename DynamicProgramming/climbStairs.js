/*
Leetcode 70 - Climbing Stairs
https://leetcode.com/problems/climbing-stairs/

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// Solution 1 | Memoization
const climbStairs = function(num) {
  let dpMap = {};
    
  function climb(num, dpMap) {
    if (num === 1 || num === 2) {
      return num;
    }
    if (num in dpMap) return dpMap[num];
    return dpMap[num] = climb(num - 1, dpMap) + climb(num - 2, dpMap);
  }
    
  return climb(num, dpMap);
};


// Solution 2 | 1D Array Dynamic Programming
var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};


// Solution 3 | Constant Space Dynamic Programming
var climbStairs = function (n) {
  if (n === 1 || n === 2) {
    return n;
  }
  let first = 1;
  let second = 1;
  for (let i = 2; i <= n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }
  return second;
};



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

var climbStairs = function(n) {
  let arr = []
  arr.push(1)
  arr.push(2)
  for(let i=2; i<n; i++){
      arr.push(arr[i-1] + arr[i-2])
  }
  return arr[n-1]
};