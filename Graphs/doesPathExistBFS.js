/* Write a function that determines if a path exists between two vertices of a directed graph.

The graph will be represented as an object, each of whose keys represents a vertex of the graph and whose value represents all vertices that can be reached from the aforementioned key. */

// REACTO Prompt: https://github.com/FullstackAcademy/technical-interview-prep/blob/master/algorithms/3-data-structures/4-solve-graph.md

const graph = {
  a: ['a', 'c'],
  c: ['r', 's'],
  r: ['a'],
  s: [],
};

function doesPathExist(graph, startNode, endNode, visited = {}) {
  if (!graph[startNode]) return false;
  let queue = [startNode];
  let pointer = 0;
  while (pointer < queue.length) {
    let node = queue[pointer];
    visited[node] = true;
    let neighbors = graph[node];
    for (let i = 0; i < neighbors.length; i++) {
      let vertex = neighbors[i];
      if (vertex === endNode) return true;
      if (!visited[vertex]) {
        queue.push(vertex);
      }
    }
    pointer++;
  }
  return false;
}

doesPathExist(graph, 'a', 'a'); // true
doesPathExist(graph, 'a', 'c'); // true
doesPathExist(graph, 'r', 's'); // true
doesPathExist(graph, 's', 'a'); // false
