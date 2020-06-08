// Given an array of duplicates, find the first occurance of a duplicate value
// [1, 2, 1, 2, 3, 4, 3] => 1
// [2, 1, 3, 4, 5, 3, 2] => 3

// Solution 1: Hash Table
// Time O(n) | Space O(n)
const firstDuplicate = (array) => {
  const duplicateCounter = {};
  let minDuplicateIdx = array.length;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (!duplicateCounter[number]) {
      duplicateCounter[number] = 1;
    }
    else {
      if (minDuplicateIdx > i) minDuplicateIdx = i;
    }
  }
  return array[minDuplicateIdx];
}

console.log(firstDuplicate([2, 1, 3, 4, 5, 3, 2])); // 3


// Solution 2: Clever
// Time O(n) | Space O(1)
const firstDuplicateClever = (array) => {
  for (let i = 0; i < array.length; i++) {
    let number = Math.abs(array[i]);
    let sign = Math.sign(array[number - 1]);
    if (sign === 1) array[number - 1] *= -1;
    else return Math.abs(array[number - 1]);
  }
  return -1;
}

console.log(firstDuplicateClever([2, 1, 3, 4, 5, 3, 2])); // 3
