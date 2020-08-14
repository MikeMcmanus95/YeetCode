// Recursive Solution
// Time: O(2^n)
function longestCommonSubsequence(str1, str2) {
  let length = 0;
  let n1 = str1.length - 1;
  let n2 = str2.length - 1;
  if (!str1 || !str2) {
    return 0;
  }
  else if (str1[n1] === str2[n2]) {
    length += 1 + longestCommonSubsequence(str1.slice(0, n1), str2.slice(0, n2));
  }
  else if (str1[n1] !== str2[n2]) {
    return Math.max(longestCommonSubsequence(str1.slice(0, n1), str2), longestCommonSubsequence(str1, str2.slice(0, n2)));
  }
	return length;
}

console.log(longestCommonSubsequence('aab', 'azb')); // 2

// Tabulation Solution
function lcs(str1, str2) {
  const grid = Array(str1.length + 1).fill().map(() => new Array(str2.length + 1));
  for (let col = 0; col < grid[0].length; col++) {
    grid[0][col] = 0;
  }
  for (let row = 0; row < grid.length; row++) {
    grid[row][0] = 0;
  }

  for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[0].length; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        grid[row][col] = 1 + grid[row - 1][col - 1];
      } else if (str1[row - 1] !== str2[col - 1]) {
        grid[row][col] = Math.max(grid[row - 1][col], grid[row][col - 1]);
      }
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}

console.log(lcs('aab', 'azb'));


// SOLUTION 3: AlgoExpert
// Time: O(nm * min(n, m)) | Space: O(nm * min(n, m))
function longestCommonSubsequence(str1, str2) {
  const grid = Array(str1.length + 1).fill().map(() => new Array(str2.length + 1));
  for (let col = 0; col < grid[0].length; col++) {
    grid[0][col] = "";
  }
  for (let row = 0; row < grid.length; row++) {
    grid[row][0] = "";
  }

	for (let row = 1; row < grid.length; row++) {
    for (let col = 1; col < grid[0].length; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        grid[row][col] = grid[row - 1][col - 1] + str1[row - 1];
      } else if (str1[row - 1] !== str2[col - 1]) {
				let subStr1 = grid[row - 1][col];
				let subStr2 = grid[row][col - 1];
        grid[row][col] = subStr1.length > subStr2.length ? subStr1 : subStr2
      }
    }
  }
}

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;
