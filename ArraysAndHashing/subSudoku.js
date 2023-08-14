/*
  Args:
    matrix: an NxN array of arrays containing the matrix to check
  Returns:
    The string "VALID" if matrix contains a valid sub-sudoku solution, and
    "INVALID" otherwise
*/
function checkSubSudoku(matrix) {
  debugger;
  const n = matrix.length;
  for (let row = 0; row < matrix.length; row++) {
    const rowArr = matrix[row];
    if (!sectionIsValid(rowArr, n)) return "INVALID";
  }

  for (let col = 0; col < n; col++) {
    const colArr = getColumn(matrix, col);
    if (!sectionIsValid(colArr, n)) return "INVALID";
  }
  return "VALID";
}

// O(n) time | O(n) space
function sectionIsValid(section, n) {
  // Create hash set to store valid nums
  const numSet = new Set();
  for (let i = 1; i <= n; i++) {
    numSet.add(`${i}`);
  }

  //Check section (row or column) to see if it contains valid numbers
  for (let num of section) {
    if (!numSet.has(num)) return false;
    numSet.delete(num);
  }
  return true;
}

// O(n) time | O(1) space
function getColumn(matrix, col) {
  const colArr = [];
  for (let i = 0; i < matrix.length; i++) {
    colArr.push(matrix[i][col]);
  }
  return colArr;
}

console.log(checkSubSudoku([['1','2','3'],['2','3','1'],['3','1','2']]))
console.log(checkSubSudoku([[1,2,3,4],[2,3,4,1],[3,4,1,2],[4,1,2,3]]))
