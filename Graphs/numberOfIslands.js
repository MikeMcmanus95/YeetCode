// When we reach land, we recursively terraform all the surrounding land, transforming it into water. When that's done, we move onto the next location in the grid. If the next location is land, we know that it was not part of our original island. So we increment islandCount, and repeat the recursive process.

const numIslands = function (grid) {
  let islandCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        islandCount++;
        terraform(row, col, grid);
      }
    }
  }

  return islandCount;
};

const terraform = (rowIdx, colIdx, grid) => {
  if (
    grid[rowIdx] === undefined ||
    grid[rowIdx][colIdx] === undefined ||
    grid[rowIdx][colIdx] === '0'
  )
    return;

  grid[rowIdx][colIdx] = '0';
  terraform(rowIdx - 1, colIdx, grid);
  terraform(rowIdx + 1, colIdx, grid);
  terraform(rowIdx, colIdx - 1, grid);
  terraform(rowIdx, colIdx + 1, grid);
};
