function deletionDistance(str1, str2) {
  const grid = Array(str2.length + 1).fill().map(() => new Array(str1.length + 1));
  for (let col = 0; col < grid[0].length; col++) {
    grid[0][col] = col;
  }
  for (let row = 0; row < grid.length; row++) {
    grid[row][0] = row;
  }

  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[row].length; col++) {
      if (str1[col - 1] !== str2[row - 1]) {
        grid[row][col] = Math.min(grid[row][col - 1], grid[row - 1][col]) + 1;
      }
      if (str1[col - 1] === str2[row - 1]) {
        grid[row][col] = grid[row - 1][col - 1];
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}

// O(n * m) | O(n * m)

console.log(deletionDistance('ethan', 'sam')) // 6

/*

  [ " e t h a n
"  [0 1 2 3 4 5],
 s [1 2 3 4 5 6],
 a [2 3 4 5 4 5],
 m [3 4 5 6 5 6]
  ]


if (str1[col] !== str2[row]) grid[row][col] = Math.min(grid[row][col - 1], grid[row - 1[col]]) + 1
if (str1 === str2) grid[row][col] = grid[row - 1][col - 1]

oggo
ogog

{a: 3, m:2, n:2}
superman
batman

spiderman
spiderman

spideaaaarman
spideraaaaman
  "" e t h a n
"" 0 1 2 3 4 5
s  1 2 3 4 5 6
a  2 3 4 5 4 5
m  3 4 5 6 5 6



input:  str1 = "dog", str2 = "frog"
output: 3

input:  str1 = "some", str2 = "some"
output: 0

input:  str1 = "some", str2 = "thing"
output: 9

input:  str1 = "", str2 = ""
output: 0

*/
