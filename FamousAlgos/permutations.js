// AlgoExpert URL: https://www.algoexpert.io/questions/Permutations


//SOLUTION 1:
// Time O(n^2 * n!) | Space O(n^2 * n!)
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutation, permsArr) {
  if (!array.length && currentPermutation.length) {
    permsArr.push(currentPermutation);
  }
  else {
    for (let i = 0; i < array.length; i++) {
      const newArr = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArr, newPermutation, permsArr);
    }
  }
}


// SOLUTION 2:
// Time O(n * n!) | Space O(n * n!)
function getPermutations(array) {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations
}

function permutationsHelper(idx, array, permutations) {
  if (idx === array.length - 1) permutations.push(array.slice());
  else {
    for (let j = idx; j < array.length; j++) {
      swap(idx, j, array);
      permutationsHelper(idx + 1, array, permutations);
      swap(idx, j, array);
    }
  }
}

function swap(i, j, array) {
  [array[i], array[j]] = [array[j], array[i]];
}
