/*
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair
where the sum is 0. Return an array that includes both vaslues that sum
to zero or undefined if a pair does not exist.
*/

// [-4,-2,-1,1,3,4] // [-4,4]
// [-4, -1, 0, 3, 5] // undefined

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}

console.log(sumZero([-4, -2, -1, 1, 3, 4]));
console.log(sumZero([-4, -1, 0, 3, 5])); // undefined
