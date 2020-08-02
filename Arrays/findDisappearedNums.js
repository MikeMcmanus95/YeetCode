/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*

Input: Array of numbers in range 1 - n

Output: Array of numbers that do not appear in input

Approach:
    -Loop over array
    -Flip sign of the index corresponding to array[i] - 1
        -If sign is already flipped, do nothing
    -Stop when i = array.length
    -Loop over array
    -If array[i] is not negative, push i + 1 to result array

Edge Cases:
    -Empty array: return empty array
    -No non negatives found: return empty array

*/
const findDisappearedNumbers = function(nums) {
  const resultArray = [];

  for (let i = 0; i < nums.length; i++) {
      let element = Math.abs(nums[i]) - 1;
      if (nums[element] > 0) nums[element] = -nums[element];
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          resultArray.push(i + 1);
      }
  }
  return resultArray;
};
