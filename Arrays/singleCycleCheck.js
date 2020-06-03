// AlgoExpert URL: (https://www.algoexpert.io/questions/Single%20Cycle%20Check)

// Time O(n) | Space O(1)
function hasSingleCycle(array) {
  let numElementsVisited = 0;
  let currentIdx = 0;
  while (numElementsVisited < array.length) {
    if (numElementsVisited > 0 && currentIdx === 0) return false;
    numElementsVisited++;
    currentIdx = getNextIndex(currentIdx, array);
    if (array[currentIdx] === 0) return false;


  }
  return currentIdx == 0;
}

// Algoexpert Implementation of getNextIndex
const getNextIndex = (currentIdx, array) => {
  let jump = array[currentIdx];
  let nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

// My Implementation of getNextIndex
// const getNextIndex = (index, array) => {
// 	index += array[index];
// 	if (index >= array.length) index -= array.length;
// 	else if (index < 0) index = array.length - index;
// 	return index;
// }
