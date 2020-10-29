function spiralTraverse(array) {
  let result = [];
  let startingRow = 0;
  let endingRow = array.length - 1;
  let startingCol = 0;
  let endingCol = array[0].length - 1;

  while (startingRow <= endingRow && startingCol <= endingCol) {
    // Right
    for (let i = startingCol; i <= endingCol; i++) {
      result.push(array[startingRow][i]);
    }
    if (startingRow === endingRow) break;
    // Down
    startingRow++;
    for (let j = startingRow; j <= endingRow; j++) {
      result.push(array[j][endingCol]);
    }
    if (startingCol === endingCol) break;
    // Left
    endingCol--;
    for (let i = endingCol; i >= startingCol; i--) {
      result.push(array[endingRow][i]);
    }
    // Up
    endingRow--;
    for (let j = endingRow; j >= startingRow; j--) {
      result.push(array[j][startingCol]);
    }
    startingCol++;

  }


  return result;
}


var spiralOrder = function(matrix) {
  const res = []
  while(matrix.length){
    // add curr row
    const first = matrix.shift()
    res.push(...first)
    for(const row of matrix){
      let val = row.pop()
      // grab the end column values
      if(val){
        res.push(val)
        // flip the row for next time to grab opposite side's column
        row.reverse()
      }
    }
    //flip the grid, to grab opposite row next time
    matrix.reverse()
  }
  return res
}


let input1 =
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
// Output: [1,2,3,6,9,8,7,4,5]

let input2 =
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder(input1))
// console.log(spiralOrder(input2))
