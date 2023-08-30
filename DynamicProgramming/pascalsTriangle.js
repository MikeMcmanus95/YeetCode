/*
Leetcode 118
https://leetcode.com/problems/pascals-triangle/

Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

var generate = function(numRows) {
    const result = [];
    
    for (let i = 0; i < numRows; i++) {
        result[i] = [];
        
        //make the triangle left aligned then all of the values in the zero-th column is a 1
        result[i][0] = 1;
        
        //the only numbers you're computing for is in the inner triangle
        for (let j = 1; j < i; j++) {
            result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        
        //all of the values at the end is a 1
        result[i][i] = 1;
    }
    
    return result;
};