// https://leetcode.com/discuss/interview-question/375262/twitter-oa-2019-partitioning-array

function partitionArrayUnique(nums, k) {
  debugger;
  if (nums.length % k !== 0) return false;

  const numCounter = new Map();
  let max = 0;
  for (let num of nums) {
    numCounter.has(num) ? numCounter.set(num, numCounter.get(num) + 1) : numCounter.set(num, 1);
    if (numCounter.get(num) > max) max = numCounter.get(num);
  }

  return max <= nums.length / k;
}

// console.log(partitionArrayUnique([1,2,3,4], 2)); // true
console.log(partitionArrayUnique([1,2,3,3], 2)); // true
// console.log(partitionArrayUnique([1,2,3,4], 3)); // false
// console.log(partitionArrayUnique([3,3,3,6,6,6,9,9,9], 3)); // true
// console.log(partitionArrayUnique([1,2,3,1,2,3,1,2,2], 3)); // false

