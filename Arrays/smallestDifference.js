// Time: O(nLog(n) + mLog(m)) | Space: O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a, b) => a - b);
  arrayTwo = arrayTwo.sort((a, b) => a - b);
  let i = 0, j = 0, diff = 0, smallestDiff = Infinity;
  let resultPair = [];
  while (i < arrayOne.length && j < arrayTwo.length) {
    diff = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      resultPair = [arrayOne[i], arrayTwo[j]];
    }
    if (arrayOne[i] === arrayTwo[j]) break;
    else if (arrayOne[i] < arrayTwo[j]) i++;
    else j++;
  }
  return resultPair;
}
