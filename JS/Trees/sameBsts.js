// AlgoExpert URL: https://www.algoexpert.io/questions/Same%20BSTs
// O(n^2) Time | O(n^2) Space
function sameBsts(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;

  if (arrayOne.length === 0 && arrayTwo.length === 0) return true;

  if (arrayOne[0] !== arrayTwo[0]) return false;

  // Get the two arrays from arrayOne and arrayTwo that represent the subtrees
  // from the root node
  let leftOne = getSmaller(arrayOne);
  let leftTwo = getSmaller(arrayTwo);
  let rightOne = getBiggerOrEqual(arrayOne);
  let rightTwo = getBiggerOrEqual(arrayTwo);

  return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}


const getSmaller = (array) => {
  const smaller = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      smaller.push(array[i]);
    }
  }
  return smaller;
}


const getBiggerOrEqual = (array) => {
  const bigger = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] >= array[0]) {
      bigger.push(array[i]);
    }
  }
  return bigger;
}
