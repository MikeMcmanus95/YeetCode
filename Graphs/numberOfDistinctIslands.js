/*
Leetcode 694 - Number Of Distinct Islands
https://leetcode.com/problems/number-of-distinct-islands/

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Return the number of distinct islands.


Example 1:
Input: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
Output: 1

Example 2:
Input: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
Output: 3
*/

var numDistinctIslands = function(grid) {
    const LAND = 1;
    const WATER = 0;
    const DIR = [ [0, 1,'R'], [0, -1, 'L'], [1, 0, 'D'], [-1, 0, 'U'] ];
    const uniqueIslandVisited = new Set();
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === LAND) {
                const pathSig = explore(row, col);
                if (!uniqueIslandVisited.has(pathSig)) {
                    uniqueIslandVisited.add(pathSig);
                }
            }
        }
    }
    
    return uniqueIslandVisited.size;
    
    function explore(x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === WATER) return '';
        
        grid[x][y] = 0;
        
        let str = '';
        
        for (const [newX, newY, direction] of DIR) {
            str += direction;
            str += explore(x + newX, y + newY);
        }
        
        return str;
    }
};