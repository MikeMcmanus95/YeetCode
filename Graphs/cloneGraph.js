/*
Leetcode 133
https://leetcode.com/problems/clone-graph/description/

Given a reference of a node in a connected undirected graph.
Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
V = nodes
Time: O(E + V) | Space: O(V)
Space is occupied by the heigh of the graph O(H) and the recursion stack
*/

//written with new Map()
function Node(val) {
  return {val: val, neighbors: []};
}

function cloneGraph(root) {
  const oldToNew = new Map(); //old:new

  function clone(node) {
    if (!node) return;

    if (oldToNew.has(node.val)) {
      return oldToNew.get(node.val);
    }
    let copy = new Node(node.val);
    oldToNew.set(node.val, copy);

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(clone(neighbor));
    }

    return copy;
  }

  return clone(root);
}

//written with JS {}
var cloneGraph = function(node) {
    const oldToNew = {};

    function clone(node) {
      if (!node) return node;
      if (oldToNew[node.val]) {
        return oldToNew[node.val];
      }

      let copy = new Node(node.val);
      oldToNew[node.val] = copy;

      for (const n of node.neighbors) {
        copy.neighbors.push(clone(n));
      }

      return copy;
    }
    
    return clone(node);
};

