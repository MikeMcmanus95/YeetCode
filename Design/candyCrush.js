// Leetcode URL: https://leetcode.com/problems/candy-crush

/**
 * @param {number[][]} board
 * @return {number[][]}
 */

// Time: O((m * n) * r) || Space: O(1)
// Where m and n are rows and cols respectively, and r is the number of rounds until
// board is stable
const candyCrush = function(board) {
  while (true) {
      let moreToCrush = false;
      for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[0].length; j++) {
              if (board[i][j] > 0) {
                  moreToCrush = flagForCrush(board, i, j, board[i][j], 0, true, false) || moreToCrush;
                  moreToCrush = flagForCrush(board, i, j, board[i][j], 0, false, true) || moreToCrush;
              }
          }
      }

      if (!moreToCrush) break;

      crush(board);
      inflictGravity(board);
  }
  return board;
};


// Flag cells for crushing by performing a pseudo dfs going right or down the grid
// If in any direction we get at least three, start flagging the cells by swapping their values to negative
// Return true or false if cells were flagged
const flagForCrush = (board, i, j, target, count, right, down) => {
  if (j === board[0].length || i === board.length || Math.abs(board[i][j]) !== Math.abs(target)) {
      return count >= 3;
  }

  let shouldFlagIndexRight = flagForCrush(board, i, j+1, target, right ? count + 1 : 1, true, false);
  let shouldFlagIndexDown = flagForCrush(board, i+1, j, target, down ? count + 1 : 1, false, true);

  if ((shouldFlagIndexRight && right) || (shouldFlagIndexDown && down)) {
      board[i][j] = -Math.abs(board[i][j]);
      return true;
  }
  return false;
}


// Scans the grid and changes any cell that is flagged to zero
const crush = (board) => {
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] < 0) board[i][j] = 0;
      }
  }
}

// Scans from the bottom of the grid up, swapping zeroes with the first non-zero element that occurs above it
const inflictGravity = (board) => {
  for (let j = 0; j < board[0].length; j++) {
      let start = board.length - 1;
      let end = board.length - 2;
      while (end >= 0) {
          if (board[start][j] === 0 && board[end][j] !== 0) {
              let temp = board[start][j];
              board[start][j] = board[end][j];
              board[end][j] = temp;
              start--;
          } else if (board[start][j] !== 0) {
              start--;
          }
          end--;
      }
  }
}
