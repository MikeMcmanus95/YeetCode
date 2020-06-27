// AlgoExpert URL: https://www.algoexpert.io/questions/River%20Sizes

// Time: O(wh) | O(wh)
function riverSizes(matrix) {
  let resultArr = [];
  let count = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        count = traverse(row, col);
        resultArr.push(count);
        count = 0;
      }
    }
  }

  function traverse(row, col) {
    if (!matrix[row] ||
      !matrix[row][col]) return;
    count++;
    matrix[row][col] = 0;
    traverse(row - 1, col);
    traverse(row, col - 1);
    traverse(row + 1, col);
    traverse(row, col + 1);
    return count;
  }
  return resultArr;
}
