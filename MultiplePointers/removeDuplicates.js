/*
Input:
  A sorted array of integers.Containing repeats.

Output:
  New length of the array with duplicates removed.

Approach:
  -Use one pointer for iterating the array
  - Another pointer for placing the next non duplicate number
  - Iterate the array and when we see a non duplicate, we move it
    to the place of the last non duplicate

*/
// input: [2, 3, 3, 3, 6, 9, 9]
// output: 4

function removeDuplicates(arr) {
  let nextNonDuplicate = 1;
  let i = 1;

  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate++;
    }
    i++;
  }

  return arr;
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));
