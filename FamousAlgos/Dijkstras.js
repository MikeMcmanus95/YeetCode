const WeightedGraph = require('../Graphs/weightedGraph');
const PriorityQueue = require('../Trees/Heaps/priorityQueue');

const wg = new WeightedGraph();
wg.addVertex('A');
wg.addVertex('B');
wg.addVertex('C');
wg.addVertex('D');
wg.addVertex('E');
wg.addVertex('F');

wg.addEdge('A', 'B', 4);
wg.addEdge('A', 'C', 2);
wg.addEdge('B', 'E', 3);
wg.addEdge('C', 'D', 2);
wg.addEdge('C', 'F', 4);
wg.addEdge('D', 'E', 3);
wg.addEdge('D', 'F', 1);
wg.addEdge('E', 'F', 1);

// Accept a starting and ending vertex
wg.Dijkstra = function (startVertex, endVertex) {
  const pq = new PriorityQueue();
  // Create a distances object
  const distances = {}
  const previous = {};
  // Path to return at end
  const path = [];
  let smallest;
  // Set each key to be every vertex in the adj list with a val of infinity, except the starting

  // Add each vertex with a priority of Infinity to the PQ, except the starting vertex

  // Create another obj called previous and set each key to be every vertex in the adj list with a val of null
  for (let vertex in this.adjacencyList) {
    if (vertex === startVertex) {
      distances[vertex] = 0;
      pq.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      pq.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  // Start looping as long as there is anything in the priority queue
  while (pq.values.length) {
    // dequeue a vertex from the priority queue
    smallest = pq.dequeue().value;
    // if that vertex is the same as the endingVertex, we are done. Build path
    if (smallest === endVertex) {
      while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
      }
      break;
    }
    // Otherwise, loop through each adj list value at that vertex
    if (smallest || distances[smallest] !== Infinity) {
      for (let neighbor in this.adjacencyList[smallest]) {
        // Find neighboring node
        let nextNode = this.adjacencyList[smallest][neighbor];
        // Calculate new distance to neighboring node
        let candidate = distances[smallest] + nextNode.weight;
        // If this new distance is less than our old distance
        if (candidate < distances[nextNode.node]) {
          // Update to new smallest distance for neighbor
          distances[nextNode.node] = candidate;
          // Updating previous - how we got to neighbor
          previous[nextNode.node] = smallest;
          // enqueue in priority queue with new priority
          pq.enqueue(nextNode.node, candidate);
        }
      }
    }
  }
  return path.concat(smallest).reverse();
}

console.log(wg.Dijkstra('A', 'E'));
// [A, C, D, F, E]
