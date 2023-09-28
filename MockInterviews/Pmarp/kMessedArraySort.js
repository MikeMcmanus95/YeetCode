/*
K-Messed Array Sort
Given an array of integers arr where each element is at most k places away from its sorted position, code an efficient function sortKMessedArray that sorts arr. For instance, for an input array of size 10 and k = 2, an element belonging to index 6 in the sorted array will be located at either index 4, 5, 6, 7 or 8 in the input array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2

output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Constraints:

[time limit] 5000ms

[input] array.integer arr

1 ≤ arr.length ≤ 100
[input] integer k

0 ≤ k ≤ 20
[output] array.integer
*/

function sortKMessedArray(arr, k) {
    const result = new Array(arr.length + 1).fill(null);
    
    for (let i = 0; i < arr.length; i++) {
      result[arr[i]] = arr[i];
    }
    
    if (result[result.length - 1] === null) {
      result.pop();
    } else if (result[0] === null) {
      result.shift();
    }
    
    return result;
  }