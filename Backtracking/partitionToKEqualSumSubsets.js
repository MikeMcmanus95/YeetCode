/*
Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into k non-empty subsets whose sums are all equal.



Example 1:

Input: nums = [4, 3, 2, 3, 5, 2, 1], k = 4
Output: True
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.


// [4, 3, 2, 3, 5, 2, 1]

// [1, 2, 2, 3, 3, 4, 5]



(5) (4, 1) (3, 2) (3, 2)


// [4, 5, 1, 2, 3, 7, 1, 9, 11] 5

             l        r
// [1, 1, 2, 3, 4, 5, 7, 9, 11]
(11) (9, 1, 1) (7,2,3)



*/


const canPartitionKSubsets = function(nums, k) {
  const total = nums.reduce((accum, ele) => accum + ele, 0);
  debugger;
  if (total % k !== 0) {
    return false;
  }

  const target = total / k;
  const visited = new Array(nums.length).fill(false);

  const canPartition = (start, numberOfSubsets, currentSum) => {
    // base case
    if (numberOfSubsets === 1) return true;

    // If a subset is found, we launch another search to find the remaining subsets from the unvisited elements
    if (currentSum === target) {
      return canPartition(0, numberOfSubsets - 1, 0);
    }

    for (let i = start; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;

        // launch a search to find other elements that will sum up to the target with the current elements
        if (canPartition(i + 1, numberOfSubsets, currentSum + nums[i])) {
          return true;
        }
        // reset to enable backtracking
        visited[i] = false;
      }
    }
    return false;
  }

  return canPartition(0, k, 0);
};

canPartitionKSubsets([1,2,3,4], 2);

//    s
// [false, false, false, false]
// [2,4,56,4,6,2] k = 4

// target = 10

/*


  []

 */
