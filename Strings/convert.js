/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

14 chars
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I


P   I    N
A  L S  I G
Y A   H R
P     I

*/



// Your code (and pseudocode) here.

// direction
// numRows = 3
// stringIdx = 4
// rowIdx, colIdx
// resultStr

// while stringIdx s.length
// Start by adding the first characters while i < numRows
// if (stringIdx + 1 === numRows)
// traverse up and to the right
// if (row === 0)
// restart

// double for loop traverse grid again
// if (grid[row][col]) append char to resultStr
// return resulStr

// O(n) time | O(n) space

/*
P   A   H   N
A P L S I I G
Y   I   R

*/

function convert(string, numRows) {
  let resultStr = '';
  let stringIdx = 0, rowIdx = 0, colIdx = 0;
  let direction = false; // false == down, true = up/right
  let stringMatrix = Array(numRows).fill().map(() => new Array(0));


  while (stringIdx < string.length) {
    console.log("row, col: ", rowIdx, colIdx);
    stringMatrix[rowIdx][colIdx] = string[stringIdx];
    if (direction === false) {
      if (rowIdx + 1 === numRows) {
        direction = true;
        rowIdx--;
        colIdx++;
      } else {
        rowIdx++;
      }
    }
    else {
      if (rowIdx === 0) {
        direction = false;
        rowIdx++;
      } else {
        rowIdx--;
        colIdx++;
      }
    }

    stringIdx++;
  }


  for (let i = 0; i < stringMatrix.length; i++) {
    for (let j = 0; j < stringMatrix[i].length; j++) {
      if (stringMatrix[i][j]) resultStr += stringMatrix[i][j];
    }
  }

  console.log(stringMatrix);
  return resultStr;
}


console.log(convert('PAYPALISHIRING', 3));
