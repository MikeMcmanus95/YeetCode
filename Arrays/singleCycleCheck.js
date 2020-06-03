// AlgoExpert URL: (https://www.algoexpert.io/questions/Single%20Cycle%20Check)

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

// Algoexpert Implementation
const getNextIndex = (currentIdx, array) => {
  let jump = array[currentIdx];
  let nextIdx = (currentIdx + jump) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}
