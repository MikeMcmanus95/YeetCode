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

var cloneGraph = function(node) { //these nodes are distinct values
  const oldToNew = new Map();
  
  function clone(curr) {
      //if you've reached the end, return
      if (!curr) return;
      
      //if you've already seen this node before, return the copy of what you're looking at
      if (oldToNew.has(curr.val)) {
          return oldToNew.get(curr.val);
      }
      
      //make a copy and mark it as visited in your map
      let copy = new Node(curr.val);
      oldToNew.set(curr.val, copy);
      
      //copy all the neighbors of curr onto copy's node
      for (const neighbor of curr.neighbors) {
          copy.neighbors.push(clone(neighbor));
      }
      
      //return the copy
      return copy;
  }
  
  return clone(node);
};

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

