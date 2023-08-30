/*
Return an array with "n" points nearest to the origin. Each point
has "x" and "y" fields.
*/

const nearest = nearestNPoints(5, [
    {x: 5, y: 5},
    {x: 10, y: 0},
    {x: 0, y: 1},
    {x: 100, y: 100},
    {x: 50, y: 0},
    {x: -5, y: -5},
    {x: 10, y: 50},
  ]);
  
for (const p of nearest) {
    console.log(`${p.x}, ${p.y}`);
}

//Approach: create results array that stores objects in the. The objects will store the coordinate and the hypotenuse.
//This will allow you to use the .sort() method on it so that you can retrieve the first 5 objects
function nearestNPoints(n, points) {
    //create an array with objects so that you can sort them later
    const result = points.map((point) => {
      return {
        point: point,
        hypotenuse: Math.pow(point.x, 2) + Math.pow(point.y, 2)
      };
    });
  
    //sort the result array by the hypotenuse
    result.sort((a, b) => a.hypotenuse - b.hypotenuse);
  
    //grab the first 5
    return result.slice(0,n).map(obj => obj.point);
}

//Optimal Approach: Build a heap like structure using an array because the heap size is always size n even for an input of a billion items
function nearestNPoints(n, points) {
    const result = [];
  
    for (const point of points) {
      let hypotenuse = Math.pow(point.x, 2) + Math.pow(point.y, 2);
      
      //edge case when the result array is empty
      if (!result.length) {
        result.push({
          point: point, 
          hypotenuse: Math.abs(hypotenuse)
        });
        continue;
      }
      
      //if result length hasn't been met and the current hypotenuse is less than the last element's hypotenuse in the result array
      if (result.length < n || hypotenuse < result[result.length - 1].hypotenuse) {
        // insert in sorted order
        const indexToInsertAt = result.findIndex(temp => hypotenuse < temp.hypotenuse);
        
        if (indexToInsertAt === -1) { //can't find a place to insert in the middle of the result array, so you add it to the end
          result.push({
            point: point, 
            hypotenuse: hypotenuse
          });
        } else { //insert in the middle
          result.splice(indexToInsertAt, 0, {point: point, hypotenuse: hypotenuse});
        }
  
        // remove last object from result array, if length is > n
        if (result.length > n) {
          result.pop();
        }
      }
    }
  
    return result.map(x => x.point);
  }