// Leetcode URL: https://leetcode.com/problems/all-paths-from-source-to-target/

var allPathsSourceTarget = function (graph) {
  // Store our paths in a results array
  let result = [];
  // The end refers to our destination node, which is the last index in our Edge List
  let end = graph.length - 1;
  // We call the helper function with 0 and an empty paths array to start
  dfs(0, []);

  return result;

  function dfs(vertex, [...path]) {
    // If our vertex has no neighbors, return
    if (!graph[vertex].length) return;
    // Push this node/vertex into our path array
    path.push(vertex);

    // Loop over the nodes neighbors
    graph[vertex].forEach((neighbor) => {
      // If the neighbor is the one we're looking for, add it to path, and push that to results
      if (neighbor === end) {
        path.push(neighbor);
        result.push([...path]);
        // Pop the destination node, in case our current node is neighboring another node that also points to our destination
        path.pop();
      } else {
        // If our neighbor isnt the node we want, recursively call our function on the neighbor node
        dfs(neighbor, path);
      }
    });
  }
};


// SOLUTION 2:
const allPathsSourceTarget = (graph) => {
  const queue = [[0]];
  const target = graph.length - 1;
  const resultArray = [];
  while (queue.length) {
    let potentialPath = queue.shift();
    let lastVertex = potentialPath[potentialPath.length - 1]
    if (lastVertex === target) {
      resultArray.push(potentialPath);
    } else {
      for (let vertex of graph[lastVertex]) {
        let newPath = potentialPath.slice();
        newPath.push(vertex);
        queue.push(newPath);
      }
    }
  }

  return resultArray;
}

console.log(allPathsSourceTarget([[1,2], [3], [3], []])); // [[0, 1 3], [0, 2, 3]]
