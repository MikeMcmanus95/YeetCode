// Leetcode URL: https://leetcode.com/problems/all-paths-from-source-to-target/

var allPathsSourceTarget = function (graph) {
  let result = [];
  let end = graph.length - 1;

  dfs(0, []);

  return result;

  function dfs(vertex, [...path]) {
    if (!graph[vertex].length) return;
    path.push(vertex);

    graph[vertex].forEach((neighbor) => {
      if (neighbor === end) {
        path.push(neighbor);
        result.push([...path]);
        path.pop();
      } else {
        dfs(neighbor, path);
      }
    });
  }
};
