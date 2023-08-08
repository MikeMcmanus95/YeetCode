/*
Leetcode 54
https://leetcode.com/problems/spiral-matrix/description/

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

var spiralOrder = function(matrix) {
    const result = [];
    let top = 0,
        left = 0,
        bottom = matrix.length-1,
        right = matrix[0].length-1;
    const size = matrix.length * matrix[0].length;

    while(result.length < size){
        //get every i in the top row
        for( let i = left ; i <= right && result.length < size; i++ ){
            result.push(matrix[top][i]);
        }
        top++;
        
        //get every i in the right col
        for( let i = top ; i <= bottom && result.length < size ; i++ ){
            result.push(matrix[i][right]);
        }
        right--;
        
        //get every i in the bottom row
        for( let i = right ; i >= left && result.length < size ; i-- ){
            result.push(matrix[bottom][i]);
        }
        bottom--;
        
        //get every i in the left col
        for( let i = bottom ; i >= top && result.length < size ; i-- ){
            result.push(matrix[i][left])
        }
        left++;
            
    }
    return result;
};