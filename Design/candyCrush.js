/*Leetcode 723
URL: https://leetcode.com/problems/candy-crush

This question is about implementing a basic elimination algorithm for Candy Crush.

Given an m x n integer array board representing the grid of candy where board[i][j] represents the type of candy. A value of board[i][j] == 0 represents that the cell is empty.

The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, crush them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. No new candies will drop outside the top boundary.
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (i.e., the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the stable board.
*/

var candyCrush = function(board) {
    if (!board) return board;

    let done = true;

    //find horizontal triplets and mark them as negative. Stop 2 columns before the end
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col + 2 < board[0].length; col++) {
        let candy1 = Math.abs(board[row][col]);
        let candy2 = Math.abs(board[row][col + 1]);
        let candy3 = Math.abs(board[row][col + 2]);

        if (candy1 && candy1 === candy2 && candy2 === candy3) {
          board[row][col] = board[row][col + 1] = board[row][col + 2] = -candy1;
          done = false;
        }
      }
    }

    //find vertical triplets and mark them as negative
    for (let col = 0; col < board[0].length; col++) {
      for (let row = 0; row + 2 < board.length; row++) {
        let candy1 = Math.abs(board[row][col]);
        let candy2 = Math.abs(board[row + 1][col]);
        let candy3 = Math.abs(board[row + 2][col]);

        if (candy1 && candy1 === candy2 && candy2 === candy3) {
          board[row][col] = board[row + 1][col] = board[row + 2][col] = -candy1;
          done = false;
        }
      }
    }

    //2 pointer to write the positive number where the negative numbers are. if you rotate the board clockwise 90 degrees
    //then bottomIndex is on the left and row pointer will move until it finds a positive number and rewrites it into bottomIndex
    if (!done) {
      for (let col = 0; col < board[0].length; col++) {
        let bottomIndex = board.length - 1; //pointer1 will stay put when it finds a negative number

        for (let row = board.length - 1; row >= 0; row--) {//pointer2
          if (board[row][col] > 0) {
            board[bottomIndex][col] = board[row][col]; //this will move the positive number at the row pointer down to bottomIndex pointer
            bottomIndex--;
          }
        }

        while (bottomIndex >= 0) {//fill in the zeroes
          board[bottomIndex][col] = 0;
          bottomIndex--;
        }
      }
    }

    return done ? board : candyCrush(board);
};



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
