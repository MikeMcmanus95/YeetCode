/*
Leetcode 73
https://leetcode.com/problems/set-matrix-zeroes/description/

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

var setZeroes = function(matrix) {
    let firstColIsZero = false;
    let ROWS = matrix.length,
        COLS = matrix[0].length;

    for (let i = 0; i < ROWS; i++) {
        if (matrix[i][0] === 0) {
            firstColIsZero = true;
        }
         for (let j = 1; j < COLS; j++) { // start reading from 0,1 and skipping the entire first column as you read through it
             if (matrix[i][j] === 0) {
                 matrix[i][0] = matrix[0][j] = 0; //use the top row and left most row as your ledger to keep track of where to fill in zero's later
             }
         }
    }

    for (let i = ROWS - 1; i >= 0; i--) {
        for (let j = COLS - 1; j > 0; j--) { //don't read the first column
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
        if (firstColIsZero) { //this is when you want to fill in the column, when colIsZero is true make it 0
            matrix[i][0] = 0;
        }
    }
};