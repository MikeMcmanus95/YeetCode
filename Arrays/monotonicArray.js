// AlgoExpert URL: https://www.algoexpert.io/questions/Monotonic%20Array
// Time: O(n) | Space: O(1)

// SOLUTION 1:
function isMonotonic(array) {
  let direction = null
  for (let i = 0; i < array.length; i++) {
    if (direction === 'increasing') {
      if (array[i] > array[i + 1]) return false;
    } else if (direction === 'decreasing') {
      if (array[i] < array[i + 1]) return false;
    } else {
      if (array[i] > array[i + 1]) direction = 'decreasing';
      else if (array[i] < array[i + 1]) direction = 'increasing';
      else continue;
    }
  }
  return true;
}


// SOLUTION 2 (Cleaner):
function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }
  }
  return isNonIncreasing || isNonDecreasing;
}
