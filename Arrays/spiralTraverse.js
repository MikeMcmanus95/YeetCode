function spiralTraverse(array) {
  let result = [];
  let startingRow = 0;
  let endingRow = array.length - 1;
  let startingCol = 0;
  let endingCol = array[0].length - 1;

  while (startingRow <= endingRow && startingCol <= endingCol) {
    // Right
    for (let i = startingCol; i <= endingCol; i++) {
      result.push(array[startingRow][i]);
    }
    if (startingRow === endingRow) break;
    // Down
    startingRow++;
    for (let j = startingRow; j <= endingRow; j++) {
      result.push(array[j][endingCol]);
    }
    if (startingCol === endingCol) break;
    // Left
    endingCol--;
    for (let i = endingCol; i >= startingCol; i--) {
      result.push(array[endingRow][i]);
    }
    // Up
    endingRow--;
    for (let j = endingRow; j >= startingRow; j--) {
      result.push(array[j][startingCol]);
    }
    startingCol++;

  }


  return result;
}
