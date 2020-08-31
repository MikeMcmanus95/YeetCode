/*

n = 3
grid = 3*3

-EENN
-ENEN


visited = [x,x,1]
          [x,0,v]
          [1,v,v]

return 2


Approach:

  -Outer function that calls traverseFunction and returns path count
  -Traverse function that will take in coordinates and go to the next node
    -If i and j are not valid: return 0
    -If node is destination: return 1
    -mark node as visited
    -recursively call on next node
    -mark node as unvisited

Time and space:
  O(n^2) | O(n^2)

*/
// Time: O(n) | Space: O(n)
function numOfPathsToDest(n) {
  const visited = new Set();
  const memo = new Array(n).fill().map(() => new Array(n).fill(0));
  let pathCount = traverseGrid(0,0, visited, n, memo);

  return pathCount;
}


function traverseGrid(i, j, visited, dimension, memo) {
  if (i < j || i >= dimension || j >= dimension || visited.has([i, j])) return 0;
  if (memo[i][j] !== 0) return memo[i][j];
  if (i === dimension - 1 && j === dimension - 1) return 1;

  visited.add([i, j]);
  const pathSum = traverseGrid(i + 1, j, visited, dimension, memo) + traverseGrid(i, j + 1, visited, dimension, memo);
  visited.delete([i, j]);
  memo[i][j] = pathSum;
  return pathSum;
}

console.log(numOfPathsToDest(3)) // 2
console.log(numOfPathsToDest(4)) // 5
