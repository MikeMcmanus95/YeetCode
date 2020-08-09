/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
[[2,1,1],
 [1,1,0],
 [0,1,1]]
*/

// Solution 1: BFS Simulation
// Time: O(n) | Space: O(n)
const orangesRotting = function(grid) {
  // Record the state of the grid using two hash sets for quick lookup
  const freshOranges = new Set();
  let rottenOranges = new Set();
  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
          if (grid[row][col] === 1) {
              freshOranges.add(`${row}${col}`);
          } else if (grid[row][col] === 2) {
              rottenOranges.add(`${row}${col}`);
          }
      }
  }

  // Simulate the rotting of oranges in the sets
  let minutes = 0;
  const directions = [[1,0], [0, 1], [-1, 0], [0, -1]];

  while (freshOranges.size > 0) {
      const infectedOranges = new Set();
      for (const coords of rottenOranges.keys()) {
          // Nice way to convert from a string to a number
          const row = coords[0] - '0';
          const col = coords[1] - '0';
          for (const direction of directions) {
              const nextRow = row + direction[0];
              const nextCol = col + direction[1];
              const key = `${nextRow}${nextCol}`;
              if (freshOranges.has(key)) {
                  freshOranges.delete(key);
                  infectedOranges.add(key);
              }
          }
      }

      if (infectedOranges.size === 0) return -1;

      rottenOranges = infectedOranges;
      minutes++;
  }
  return minutes;
};
