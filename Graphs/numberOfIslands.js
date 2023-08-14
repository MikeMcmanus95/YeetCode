/*
Leetcode 200
https://leetcode.com/problems/number-of-islands/

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1


Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Time: O(M*N) | Space: O(M*N)
*/

const LAND = "1";
const WATER = "0";

var numIslands = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    let islandCount = 0;
    
    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= ROWS || y >= COLS || grid[x][y] === WATER) return;

        grid[x][y] = WATER;

        dfs(x+1, y);
        dfs(x-1, y);
        dfs(x, y+1);
        dfs(x, y-1);
        
    }
    
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === LAND) {
                islandCount++;
                dfs(i, j);
            }
        }
    }

    return islandCount;
};

// When we reach land, we recursively terraform all the surrounding land, transforming it into water. When that's done, we move onto the next location in the grid. If the next location is land, we know that it was not part of our original island. So we increment islandCount, and repeat the recursive process.

// const numIslands = function (grid) {
//   let islandCount = 0;
//   for (let row = 0; row < grid.length; row++) {
//     for (let col = 0; col < grid[row].length; col++) {
//       if (grid[row][col] === '1') {
//         islandCount++;
//         terraform(row, col, grid);
//       }
//     }
//   }

//   return islandCount;
// };

// const terraform = (rowIdx, colIdx, grid) => {
//   if (
//     grid[rowIdx] === undefined ||
//     grid[rowIdx][colIdx] === undefined ||
//     grid[rowIdx][colIdx] === '0'
//   )
//     return;

//   grid[rowIdx][colIdx] = '0';
//   terraform(rowIdx - 1, colIdx, grid);
//   terraform(rowIdx + 1, colIdx, grid);
//   terraform(rowIdx, colIdx - 1, grid);
//   terraform(rowIdx, colIdx + 1, grid);
// };
