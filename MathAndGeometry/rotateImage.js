/*
Leetcode 48
https://leetcode.com/problems/rotate-image/description/

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
Output: [
    [7,4,1],
    [8,5,2],
    [9,6,3]
]
*/

var rotate = function(matrix) {
    let M = matrix.length;

    for (let i = 0; i < M; i++) { // this will flip the image along a diagonal axis from upper left to lower right
        for (let j = i; j < M; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < M; i++) { // this will flip along the middle vertical axis to get to the desired outcome
        for (let j = 0; j < M/2; j++) {
            [matrix[i][j], matrix[i][M - 1 - j]] = [matrix[i][M - 1 - j], matrix[i][j]];
        }
    }

    return matrix;
};