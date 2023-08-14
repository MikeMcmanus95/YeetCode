/*
Leetcode 79
https://leetcode.com/problems/word-search/description/

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


Example 1:
Input: board = 
[
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
], 
word = "ABCCED"

Output: true

N is the number of cells on the board
L is the length of the word to be matched
3 choices because we don't go back to where we came from

Time: O(N*3^L)| Space: O(L) 
*/

var exist = function(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;

    function dfs(x, y, wordIndex) {
        if (word.length === wordIndex) return true;
        if (x < 0 || y < 0 || x >= ROWS || y >= COLS || board[x][y] !== word[wordIndex]) return false;
        
        board[x][y] = '#';

        if (
            (dfs(x+1, y, wordIndex+1)) ||
            (dfs(x-1, y, wordIndex+1)) ||
            (dfs(x, y+1, wordIndex+1)) ||
            (dfs(x, y-1, wordIndex+1)) 
            ) {
                return true;
            }

        board[x][y] = word[wordIndex];
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (board[i][j] === word[0] && dfs(i,j,0)) {
                return true;
            }
        }
    }

    return false;
};