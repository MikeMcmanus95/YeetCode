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


//Recursion Solution Time: O(2^n)
function climbStars(num) {
  //base case
  if (num === 1 || num === 2) return num;

  //recursive case
  return climbStairs(num - 1) + climbStairs(num - 2);
}

/*
num 5

cs(5) = 7

time 2 ^ n

Why is climbStairs() O(2^n)??
 - Each function call calls two more of itself
 - 1 iteration will call 2
    2 will call 4
    4 will call 8
    each function call doubles itself


climbStairs(1) -> 1
climbStairs(2) -> 1
climbStairs(3) -> foo(1) and foo(2)

climbStairs(4) -> foo(3) and foo(2)
climbStairs(5) -> foo(3) and foo(4)
  foo(3).     foo(4)

              foo(2) and  foo(3)
                   foo(1) and foo(2)

  foo(1) foo(2)
...
...




*/


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


/*
Dynamic Programming - 
 - "optimizatino of recursion"

 - specifically, memoization!

 - Memoization = storing previously computed solutions and using to compute future solutions efficiently
   - Always uses an array or map
   - Makes a exponential time complexity solution (e.g O(2^n, n!, n^4) to be polynomial (e.g O(n^2, n*m, etc.))


 - When they see a "super hard question" they assume that it's a dynamic programming question. DONT FALL FOR THAT (yet). 

 Approach Dynamic Programming Questions (whether or not you know it is)
  - Find the recursive solution
  - Memoize later



- always code out the brute force solution first; then optimize

*/