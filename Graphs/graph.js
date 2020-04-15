class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach((v) => {
      g.removeEdge(v, vertex);
    });
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(startingNode) {
    let result = [];
    let visited = {};
    const adjacencyList = this.adjacencyList;

    // Depth first recursive traversal
    function traverse(vertex) {
      if (!adjacencyList[vertex]) return;
      visited[vertex] = true;
      result.push(vertex);
      for (let neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          traverse(neighbor);
        }
      }
    }
    traverse(startingNode);
    return result;
  }

  depthFirstIterative(startingNode) {
    const stack = [startingNode];
    const result = [];
    const visited = {};
    visited[startingNode] = true;
    let currentVertex;

    // Iterative depth first, post order
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  breathFirstTraversal(startingNode) {
    const queue = [startingNode];
    const result = [];
    const visited = {};
    visited[startingNode] = true;

    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');
console.log(g.depthFirstRecursive('A'));
console.log(g.depthFirstIterative('A'));
console.log(g.breathFirstTraversal('A'));

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
console.log(g);
