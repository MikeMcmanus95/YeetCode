/*
Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Your algorithm should be efficient, both from a time and a space complexity perspectives.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 1, 2, 3]

output: 4 
*/

//Time: O(n) | Space: O(n) uses a set to keep track
function getDifferentNumber(arr) {
    const set = new Set();
    
    for (const num of arr) {
      set.add(num);
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (!set.has(i)) {
        return i;
      }
    }
    
    return arr.length;
  }

  //Time: O(n) | Space: O(1), if you're allowed to modify the input array then you can swap
  function getDifferentNumber(arr) {
    let i = 0;
  
    while (i < arr.length) {
        if (arr[i] > 0 && arr[i] <= arr.length && arr[arr[i]] !== arr[i]) {//what you're looking at is > 0 AND <= length AND it's not in the correct place
            [arr[arr[i]], arr[i]] = [arr[i], arr[arr[i]]];
        } else {
            i++;
        }
    }
  
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== i) return i;
    }

    return i;
}
