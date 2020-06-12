// AlgoExpert URL: https://www.algoexpert.io/questions/Search%20In%20Sorted%20Matrix

// SOLUTION 1:
// Naive. Doesn't pass all edge cases. See notes for more info on this approach.
// Time O(n) | Space O(n) | n = row * col
function searchInSortedMatrix(matrix, target) {
  const visitedNodes = {};
  let row = 0, col = 0;
  while (row < matrix.length && col < matrix[0].length) {
    let number = matrix[row][col];
    visitedNodes[number] ? visitedNodes[number]++ : visitedNodes[number] = 1;
    if (visitedNodes[number] > 2) break;

    if (number < target) col++;
    else if (number > target) {
      col--;
      if (col + 1 === matrix[row].length - 1) {
        row++;
      }
      if (col - 1 < 0 && row !== 0) {
        row--;
      }
    } else {
      return [row, col];
    }
  }
  return [-1, -1];
}
