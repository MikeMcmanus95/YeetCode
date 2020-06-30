// Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

// O(n) Time | O(n) Space
function getDifferentNumber(arr) {
  const numberOccurances = {};
  let lowestPossibleNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!numberOccurances[arr[i]]) numberOccurances[arr[i]] = 1;
  }

  while (true) {
    if (lowestPossibleNum in numberOccurances) {
      lowestPossibleNum++;
    } else {
      break;
    }
  }
  return lowestPossibleNum;
}

// O(n log(n)) time | O(1) space
function getDifferentNumber(arr) {
  let lowestPossibleNum = 0;
  arr.sort((a, b) => a - b);
  for (let num of arr) {
    if (lowestPossibleNum === num) lowestPossibleNum++;
    if (lowestPossibleNum && lowestPossibleNum < num) break;
  }
  return lowestPossibleNum;
}
