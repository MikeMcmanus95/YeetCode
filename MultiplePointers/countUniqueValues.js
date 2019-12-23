// Write a function that takes a sorted array and returns a count of the unique values in that array
// There may be negative values, but the array will always be sorted.

// [1,1,1,1,1,2] // 2
// [1,2,3,4,4,4,4] // 4
// [-2,-1,-1,0,1] // 4

function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  while (j <= arr.length - 1) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    } else if (arr[i] === arr[j]) {
      j++;
    }
  }
  return arr.slice(0, i + 1).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
