function pivot(array, startIdx = 0, endIdx = array.length - 1) {
  let currPivot = startIdx;
  let i = 0;
  while (i < endIdx) {
    if (array[currPivot] > array[i]) {
      currPivot++;
      swap(array, currPivot, i);
    }
    swap(array, startIdx, currPivot);
    i++;
  }
  return currPivot;
}

function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(pivot([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]));
