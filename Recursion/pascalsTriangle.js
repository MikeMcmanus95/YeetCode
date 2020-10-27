/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0) return []
  if(numRows === 1) return [[1]]
  if(numRows === 2) return [[1], [1,1]]
  const output = [[1], [1,1]]

  for(let i = 3; i <= numRows; i++){
    output.push(helper(output[output.length - 1]))
  }

  function helper(currentLayer){
    let newLayer = [1]

    for(let i = 1; i < currentLayer.length; i++){
      newLayer.push(currentLayer[i-1] + currentLayer[i])
    }
    newLayer.push(1)

    return newLayer
  }

  return output
};
