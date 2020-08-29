class JobNode {
	constructor(job) {
		this.job = job;
		this.prereqs = [];
		this.visited = false;
		this.visiting = false;
	}
}
class JobGraph {
	constructor(jobs) {
		this.nodes = [];
		this.graph = {};
		for (const job of jobs) {
			this.addNode(job);
		}
	}

	addPrereq(job, prereq) {
		const jobNode = this.getNode(job);
		const prereqNode = this.getNode(prereq);
		jobNode.prereqs.push(prereqNode);
	}

	addNode(job) {
		this.graph[job] = new JobNode(job);
		this.nodes.push(this.graph[job]);
	}

	getNode(job) {
		if (!this.graph[job]) this.addNode(job);
		return this.graph[job];
	}
}

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


// ---------------------------------------------------------------------------//
// Solution 2: Graph Class
// Time: O(j + d) | Space: O(j + d)
// Handles Cycles

function topologicalSort(jobs, deps) {
	const jobGraph = createJobGraph(jobs, deps);
	return getOrderedJobs(jobGraph);
}

function createJobGraph(jobs, deps) {
	const graph = new JobGraph(jobs);
	// Adding edges
	for (const [prereq,job] of deps) {
		graph.addPrereq(job, prereq);
	}
	return graph;
}

function getOrderedJobs(graph) {
	const orderedJobs = [];
	const nodes = graph.nodes;
	while (nodes.length) {
		const node = nodes.pop();
		const containsCycle = depthFirstTraverse(node, orderedJobs);
		if (containsCycle) return [];
	}
	return orderedJobs;
}

function depthFirstTraverse(node, orderedJobs) {
	if (node.visited) return false;
	if (node.visiting) return true;
	node.visiting = true;
	for (const prereqNode of node.prereqs) {
		const containsCycle = depthFirstTraverse(prereqNode, orderedJobs);
		if (containsCycle) return true;
	}
	node.visited = true;
	node.visiting = false;
	orderedJobs.push(node.job);
	return false;
}

// ---------------------------------------------------------------------------//
// Solution 3: Graph Class And Deps
// Time: O(j + d) | Space: O(j + d)
// Handles Cycles
function topologicalSort(jobs, deps) {
	const jobGraph = createJobGraph(jobs, deps);
	return getOrderedJobs(jobGraph);
}

function createJobGraph(jobs, deps) {
	const graph = new JobGraph(jobs);
	// Adding edges
	for (const [job, dep] of deps) {
		graph.addDep(job, dep);
	}
	return graph;
}

function getOrderedJobs(graph) {
	const orderedJobs = [];
	const nodesWithNoPrereqs = graph.nodes.filter((node) => !node.numOfPrereqs);
	while (nodesWithNoPrereqs.length) {
		const node = nodesWithNoPrereqs.pop();
		orderedJobs.push(node.job);
		removeDeps(node, nodesWithNoPrereqs);
	}
	const graphHasEdges = graph.nodes.some((node) => node.numOfPrereqs);
	return graphHasEdges ? [] : orderedJobs;
}

function removeDeps(node, nodesWithNoPrereqs) {
	while (node.deps.length) {
		const dep = node.deps.pop();
		dep.numOfPrereqs--;
		if (dep.numOfPrereqs === 0) nodesWithNoPrereqs.push(dep);
	}
}
