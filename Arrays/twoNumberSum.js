/* Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
Sample output: [-1, 11]

Implementation: loop over the array twice using multiple pointers. Comparing each element to every other
element in the array

Time: O(n^2) Space: O(1)
*/

// SOLUTION 1:
// function twoNumberSum(array, targetSum) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array[j]];
//       }
//     }
//   }
//   return [];
// }


// SOLUTION 2:
function twoNumberSum(array, targetSum) {
  debugger;
  let nums = {};
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    if ((targetSum - array[i]) in nums) {
      pairs.push(targetSum - array[i], array[i]);
    }
    else {
      nums[array[i]] = true;
    }
  }
  return pairs;
}


console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
