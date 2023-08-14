// Leetcode URL: https://leetcode.com/problems/asteroid-collision/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
// Time: O(n) | Space: O(n)
var asteroidCollision = function(asteroids) {
  let res = [];
  for(let asteroid of asteroids) {
      while(true) {
          let lastValue = res[res.length - 1];
          if(res.length && lastValue > 0 && asteroid < 0) {
              let currAbsValue = Math.abs(asteroid)
              if(lastValue <= currAbsValue) res.pop();
              if(lastValue >= currAbsValue) break;
          } else {
              res.push(asteroid);
              break;
          }
      }
  }
  return res;
};


console.log(asteroidCollision([3,3,3,-10])); // [-10]
console.log(asteroidCollision([-2,2,2,-10])); // [-2, -10]
