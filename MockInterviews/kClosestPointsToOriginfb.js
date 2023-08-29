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

function nearestNPoints(n, points) {
    const nearest = [];
    for (const point of points) {
      const hypotenuse = Math.pow(point.x, 2) + Math.pow(point.y, 2);
      if (nearest.length === 0) {
        nearest.push({point: point, hypotenuse: hypotenuse});
        continue;
      }
      if (nearest.length < n || hypotenuse < nearest[nearest.length - 1].hypotenuse) {
        // insert in sorted order
        const indexToInsertAt = nearest.findIndex(existing => existing.hypotenuse > hypotenuse);
        if (indexToInsertAt === -1) {
          nearest.push({point: point, hypotenuse: hypotenuse});
        } else {
          nearest.splice(indexToInsertAt, 0, {point: point, hypotenuse: hypotenuse});
        }
        // remove last object from nearest, if length is > n
        if (nearest.length > n) {
          nearest.pop();
        }
      }
    }
    return nearest.map(x => x.point);
  }