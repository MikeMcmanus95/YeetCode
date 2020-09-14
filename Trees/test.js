function hasCommonAncestor(parentChildPairs, node1, node2) {
  const adjList = {};
  const visited = {};
  let p1 = node1;
  let p2 = node2;


  for (let [parent, child] of parentChildPairs) {
    if (!adjList[parent]) {
      adjList[parent] = [];
    }

    if (adjList[child]) {
      adjList[child].push(parent);
    } else {
      adjList[child] = [parent];
    }
  }




  return getParents(p1, adjList, visited) || getParents(p2, adjList, visited);
}


function getParents(vertex, adjList, visited) {
   const queue = [vertex];
  while (adjList[vertex].length !== 0) {
    let node = queue.shift();
    let parents = adjList[node];
    if (!node || !parents) break;
    if (visited[node]) return true;
    else visited[node] = true;
    for (let node of parents) {
      queue.push(node);
    }
  }
  return false;
}


// Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

// For example, in this diagram, the earliest ancestor of 6 is 14, and the earliest ancestor of 15 is 2.

//          14
//          |
//   2      4
//   |    / | \
//   3   5  8  9
//  / \ / \     \
// 15  6   7    11

// Write a function that, for a given individual in our dataset, returns their earliest known ancestor -- the one at the farthest distance from the input individual. If there is more than one ancestor tied for "earliest", return any one of them. If the input individual has no parents, the function should return null (or -1).

// Sample input and output:

// parentChildPairs3 = [
//     (2, 3), (3, 15), (3, 6), (5, 6), (5, 7),
//     (4, 5), (4, 8), (4, 9), (9, 11), (14, 4),
// ]

// findEarliestAncestor(parentChildPairs3, 8) => 14
// findEarliestAncestor(parentChildPairs3, 7) => 14
// findEarliestAncestor(parentChildPairs3, 6) => 14
// findEarliestAncestor(parentChildPairs3, 15) => 2
// findEarliestAncestor(parentChildPairs3, 14) => null or -1
// findEarliestAncestor(parentChildPairs3, 11) => 14

// Additional example:

//   14
//   |
//   2      4    1
//   |    / | \ /
//   3   5  8  9
//  / \ / \     \
// 15  6   7    11

// parentChildPairs4 = [
//     (2, 3), (3, 15), (3, 6), (5, 6), (5, 7),
//     (4, 5), (4, 8), (4, 9), (9, 11), (14, 2), (1, 9)
// ]

// findEarliestAncestor(parentChildPairs4, 8) => 4
// findEarliestAncestor(parentChildPairs4, 7) => 4
// findEarliestAncestor(parentChildPairs4, 6) => 14
// findEarliestAncestor(parentChildPairs4, 15) => 14
// findEarliestAncestor(parentChildPairs4, 14) => null or -1
// findEarliestAncestor(parentChildPairs4, 11) => 4 or 1

// n: number of pairs in the input



const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12], [12, 9],
    [15, 13]
];

const parentChildPairs2 = [
    [11, 10], [11, 12], [2, 3], [10, 2], [10, 5],
    [1, 3], [3, 4], [5, 6], [5, 7], [7, 8]
];

const parentChildPairs3 = [
    [2, 3], [3, 15], [3, 6], [5, 6], [5, 7],
    [4, 5], [4, 8], [4, 9], [9, 11], [14, 4],
];

const parentChildPairs4 = [
    [2, 3], [3, 15], [3, 6], [5, 6], [5, 7],
    [4, 5], [4, 8], [4, 9], [9, 11], [14, 2], [1, 9]
];






// Time: O(n) | Space: O(n)
function findEarliestAncestor(parentChildPairs, vertex) {
  const adjList = {};
  let earliestAncestor = -1;

  for (let [parent, child] of parentChildPairs) {
    if (!adjList[parent]) {
      adjList[parent] = [];
    }

    if (adjList[child]) {
      adjList[child].push(parent);
    } else {
      adjList[child] = [parent];
    }
  }


  if (adjList[vertex].length === 0) return earliestAncestor;

  const queue = [vertex];
  while (queue.length) {
    let node = queue.shift();
    let parents = adjList[node];
    if (parents.length === 0) {
      earliestAncestor = node;
    }
    for (let node of parents) {
      queue.push(node);
    }
  }

  return earliestAncestor;
}


// Time: O(n) | Space: O(n)
function findNodesWithZeroAndOneParents(parentChildPairs) {
  const adjList = {};
  const zeroParentsArr = [];
  const oneParentArr = [];

  for (let [parent, child] of parentChildPairs) {
    if (!adjList[parent]) {
      adjList[parent] = [];
    }

    if (adjList[child]) {
      adjList[child].push(parent);
    } else {
      adjList[child] = [parent];
    }
  }

  for (let vertex in adjList) {
    if (adjList[vertex].length === 0) zeroParentsArr.push(vertex);
    else if (adjList[vertex].length === 1) oneParentArr.push(vertex);
  }

  return [zeroParentsArr, oneParentArr];
}

// console.log(findNodesWithZeroAndOneParents(parentChildPairs));
