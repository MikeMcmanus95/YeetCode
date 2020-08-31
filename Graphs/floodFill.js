// Leetcode URL: https://leetcode.com/problems/flood-fill/submissions/
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
  let stack = [[sr, sc]];
  let originalColor = image[sr][sc];
  if (originalColor === newColor) return image;

  while(stack.length) {
    let [row, col] = stack.pop();
    let val = image[row][col];
    if(val === originalColor) {
       image[row][col] = newColor;

      if(checkNeighbors(image, row + 1, col, originalColor)) stack.push([row + 1, col])
      if(checkNeighbors(image, row - 1, col, originalColor)) stack.push([row - 1, col])
      if(checkNeighbors(image, row, col + 1, originalColor)) stack.push([row, col + 1])
      if(checkNeighbors(image,  row, col - 1, originalColor)) stack.push([row, col - 1])
    }
  }

  return image;
}

function checkNeighbors(image, row, col, originalColor) {
  if(row < image.length && row >= 0 && col < image[0].length && col >= 0) {
      if(image[row][col] === originalColor){
        return true;
      }
  }
  return false;
}
