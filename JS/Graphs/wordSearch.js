/*
Leetcode URL: https://leetcode.com/problems/word-search/
The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.


Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/

const exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // If our cell is the first character, and we found all other characters, return true
      if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, i, j, count, word) => {
  // if our count is equal to our word length, we've found all characters we need. Base case.
  if (count === word.length) return true;

  // Check if we're going out of bounds, or if the cell we're on is not the char we're looking for
  if (
    i < 0 ||
    i >= board.length ||
    j < 0 ||
    j >= board[i].length ||
    board[i][j] !== word[count]
  ) {
    return false;
  }

  // If we havent gone out of bounds, and we just found the first char, we recurse

  // first we set the cell we've already visited to an empty string to mark where we've been
  let temp = board[i][j];
  board[i][j] = '';

  // We check up, down, left and right from where we currently are
  let found =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);

  // We set our visited character back to its original value in case we need to go down a different path.
  board[i][j] = temp;
  return found;
};
