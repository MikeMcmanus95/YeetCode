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

