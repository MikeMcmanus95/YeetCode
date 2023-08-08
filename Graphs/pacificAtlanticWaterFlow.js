/*
Leetcode 417
https://leetcode.com/problems/pacific-atlantic-water-flow/description/

There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 
Example 1:
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown below:
[0,4]: [0,4] -> Pacific Ocean 
       [0,4] -> Atlantic Ocean
[1,3]: [1,3] -> [0,3] -> Pacific Ocean 
       [1,3] -> [1,4] -> Atlantic Ocean
[1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean 
       [1,4] -> Atlantic Ocean
[2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean 
       [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
[3,0]: [3,0] -> Pacific Ocean 
       [3,0] -> [4,0] -> Atlantic Ocean
[3,1]: [3,1] -> [3,0] -> Pacific Ocean 
       [3,1] -> [4,1] -> Atlantic Ocean
[4,0]: [4,0] -> Pacific Ocean 
       [4,0] -> Atlantic Ocean
Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
Example 2:

Input: heights = [[1]]
Output: [[0,0]]
Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.

Time: O(M*N) | Space: O(M*N) where M is rows and N is columns
*/


var pacificAtlantic = function(heights) {
    function dfs(x, y, prev, ocean) {
        if (x < 0 || y < 0 || x >= ROWS || y >= COLS) return;

        if (heights[x][y] < prev) return;
        if (ocean[x][y]) return;

        ocean[x][y] = 1;

        dfs(x+1, y, heights[x][y], ocean);
        dfs(x-1, y, heights[x][y], ocean);
        dfs(x, y+1, heights[x][y], ocean);
        dfs(x, y-1, heights[x][y], ocean);
    }
    
    if (!heights.length) return [];
    const ROWS = heights.length;
    const COLS = heights[0].length;

    const atlantic = [];
    const pacific = [];
    const result = [];

    for (let i = 0; i < ROWS; i++) {
        atlantic.push(new Array(COLS).fill(0));
        pacific.push(new Array(COLS).fill(0));
    }

    //top and bottom
    for (let i = 0; i < COLS; i++) {
        dfs(0, i, Number.MIN_SAFE_INTEGER, pacific);
        dfs(ROWS - 1, i, Number.MIN_SAFE_INTEGER, atlantic);
    }

    //left and right
    for (let i = 0; i < ROWS; i++) {
        dfs(i, 0, Number.MIN_SAFE_INTEGER, pacific);
        dfs(i, COLS - 1, Number.MIN_SAFE_INTEGER, atlantic);
    }

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (atlantic[i][j] && pacific[i][j]) {
                result.push([i,j]);
            }
        }
    }

    return result;
};
