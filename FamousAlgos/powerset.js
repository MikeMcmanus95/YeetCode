// AlgoExpert URL: https://www.algoexpert.io/questions/Powerset

// SOLUTION 1:
// Time O(2^n * n) | Space O(2^n * n)
function powerset(array) {
  let subsets = [[]];
  for (let i = 0; i < array.length; i++) {
    let length = subsets.length;
    for (let j = 0; j < length; j++) {
      subsets.push(subsets[j].concat(array[i]));
    }
  }
  return subsets;
}

console.log(powerset([1, 2, 3])) // [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]

// SOLUTION 2:
// Time O(2^n * n) | Space O(2^n * n)
function powerset(array, idx = null) {
  // [1,2,3,4]
  // Set idx to last element (3)
  if (idx === null) idx = array.length - 1;
  // Base case. return our base powerset
  else if (idx < 0) return [[]];
  // Set ele to our last element of the array in our first call (4)
  let ele = array[idx];
  let subsets = powerset(array, idx - 1); // powerset([1,2,3], 2) // powerset([1,2], 1)
  let currentLength = subsets.length;
  for (let i = 0; i < currentLength; i++) {
    let currentSubset = subsets[i]; // [[]]
    subsets.push(currentSubset.concat(ele)); // [[], [1]]
  }
  return subsets;
}
