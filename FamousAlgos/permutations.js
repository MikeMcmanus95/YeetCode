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
