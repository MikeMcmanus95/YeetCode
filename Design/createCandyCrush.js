function createGrid(width, height, numOfColors) {
  debugger;
  let hasValidMove = false;
  // Create the grid of NxM
  let grid = Array(height).fill().map(() => new Array(width));
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < width; col++) {
      if (!grid[row][col]) {
        let colorVal = addColorValue(grid, row, col, numOfColors);
        grid[row][col] = colorVal;
      }
      if (!hasValidMove && row === 1) {
        createValidMove(grid, row, col, numOfColors);
        col += 2;
        hasValidMove = true;
      }
    }
  }
  return grid;
}

function addColorValue(grid, row, col, numOfColors) {
  let excludedColors = [];
  let left1 = 0, left2 = 0, above1 = 0, above2 = 0;
  if (col - 1 >= 0) left1 = grid[row][col - 1];
  if (col - 2 >= 0) left2 = grid[row][col - 2];
  if (row - 1 >= 0) above1 = grid[row - 1][col];
  if (row - 2 >= 0) above2 = grid[row - 2][col];

  if (left2 && left1 === left2) {
    excludedColors.push(left1);
  }
  if (above2 && above1 === above2) {
    excludedColors.push(above1);
  }
  // Generate a color based on a random value & exlcuding whichever values we need to
  return generateRandomColor(numOfColors, excludedColors);
}

function generateRandomColor(numOfColors, excludedColors) {
  // Max is inclusive, min is inclusive.
  let randomColor = Math.floor(Math.random() * (numOfColors)) + 1
  for (let exColor of excludedColors) {
    if (randomColor === exColor) {
      randomColor++;
    }
  }
  return randomColor;
}

function createValidMove(grid, row, col, numOfColors) {
  let repeatedValue = grid[row - 1][col];
  grid[row][col] = generateRandomColor(numOfColors, [repeatedValue]);
  grid[row][col + 1] = repeatedValue;
  grid[row][col + 2] = repeatedValue;
}

console.log(createGrid(5, 5, 3));

// validMove = false
// add values at each spot
	// check surrounding elements, 2 spaces above and left
	// if validMove is false && if row == 1
		// createValidMove(grid, row, col)
		// col += 2
	// if spot has a value, continue
	// if L1 == L2 spot cannot be L1
	// if T1 == T2 spot cannot be T1
	// make spot a random value from the remaining candidates
	// return grid

// Create valid move
	// check directly above, grab that value
	// make our current spot != above
	// make two to the right = above
