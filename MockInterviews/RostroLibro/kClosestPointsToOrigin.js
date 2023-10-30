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


var kClosest = function(points, k) {
  const result = [];

  for (const point of points) {
      const [x, y] = point;
      const hyp = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
      const LENGTH = result.length;
      const obj = {
                  point : point,
                  hyp: hyp
              }
      
      if (!LENGTH) {
          result.push(obj)
          continue;
      }

      //if result.length < k || hyp < the last el
      if (LENGTH < k || hyp < result[result.length - 1].hyp) {
          //find where to insert the point
          const indexToInsertAt = result.findIndex(temp => hyp < temp.hyp);
          
          if (indexToInsertAt === -1) {
              result.push(obj);
          } else {
              result.splice(indexToInsertAt, 0, obj);
          }

          if (result.length > k) {
              result.pop();
          }
      }
  }

  return result.map(x => x.point);
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