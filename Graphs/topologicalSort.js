/**
 *
 * @param {Array} jobs
 * @param {Array} deps
 */
// Solution 1
// Does not handle cycles
function topologicalSort(jobs, deps) {
  // Construct adjacency list
	const graph = constructGraph(jobs, deps);
	const visited = {};
	const sortedStack = [];
	// Perform top sort on graph
	for (let vertex in graph) {
		if (visited[vertex]) continue;
		topSortUtil(graph, vertex, visited, sortedStack);
	}
	return sortedStack.reverse();
}

function topSortUtil(graph, vertex, visited, stack) {
	visited[vertex] = true;
	for (let neighbor of graph[vertex]) {
		if (visited[neighbor]) continue;
		topSortUtil(graph, neighbor, visited, stack);
	}
	stack.push(vertex);
}

function constructGraph(jobs, deps) {
	const graph = {};
	for (const vertex of jobs) {
		for (const dep of deps) {
			if (dep[0] === vertex) {
				graph[vertex] ? graph[vertex].push(dep[1]) : graph[vertex] = [dep[1]];
			}
		}
		if (!graph[vertex]) graph[vertex] = [];
	}
	return graph;
}
