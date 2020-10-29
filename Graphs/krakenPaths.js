/*



*/
// https://github.com/chaithu123/Twitter-Coding-Challenge/blob/master/Twitter-Coding-Challenge-__-2.pdf

// const grid = [
//   [x, x, x],
//   [x, x, x],
//   [x, x, x],
// ] // 3 x 3  =  13

//recursive
function findPathsRecursive(m, n){

  function traverse(x,y){
    if(x === m - 1) return 1
    if(y === n - 1) return 1

    return traverse(x + 1, y) + traverse(x, y + 1) + traverse(x + 1, y + 1)
  }

  return traverse(0,0)
}

// console.log(findPathsRecursiveRecursive(3,3)) // 13

function findPathsDynamic(m, n) {
  const grid = new Array(m).fill().map(() => new Array(n).fill(1));
  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[row].length; col++) {
      grid[row][col] = grid[row - 1][col] + grid[row][col - 1] + grid[row -1 ][col - 1];
    }
  }

  return grid[m - 1][n- 1];
}


console.log(findPathsDynamic(3,3));
