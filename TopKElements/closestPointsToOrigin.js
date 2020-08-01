const Heap = require('./collections/heap');

// Time: O(n * log(k)) | Space: O(k)
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get_point() {
    return "[" + this.x + ", " + this.y + "] ";
  }

  // used for max-heap
  compare(other) {
    return this.getDistanceFromOrigin() - other.getDistanceFromOrigin();
  }

  getDistanceFromOrigin() {
    return (this.x * this.x) + (this.y * this.y);
  }

  getPointArray() {
    return [this.x, this.y]
  }
};


// dist((x, y), (a, b)) = √(x - a)² + (y - b)²
const find_closest_points = function(points, k) {
  const maxHeap = new Heap([], null, (a, b) => a.compare(b));
  for (let i = 0; i < k; i++) {
    maxHeap.push(points[i]);
  }

  for (let i = k - 1; i < points.length; i++) {
    if (points[i].getDistanceFromOrigin() < maxHeap.peek().getDistanceFromOrigin()) {
      maxHeap.pop();
      maxHeap.push(points[i]);
    }
  }

  return maxHeap.toArray();
};


points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
result = "Here are the k points closest the origin: ";
for (i=0; i < points.length; i++)
  result += points[i].get_point();
console.log(result);
