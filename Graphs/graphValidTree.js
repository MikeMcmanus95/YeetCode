/*
Leetcode 261
https://leetcode.com/problems/graph-valid-tree/description/

You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

Return true if the edges of the given graph make up a valid tree, and false otherwise.

Example 1:
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true
*/

var validTree = function(n, edges) {
    if (n === 0) return true;
    
    const adj = {};
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (const [n1, n2] of edges) {
        adj[n1].push(n2);
        adj[n2].push(n1);
    }
    
    const visited = new Set();
    
    function dfs(i, prev) {
        if (visited.has(i)) return false; // loop detected therefore not valid
  
        visited.add(i);
        
        for (const neighbor of adj[i]) {
            if (neighbor === prev) continue;
            if (!dfs(neighbor, i)) return false; // loop detected therefore not valid
        }
        return true; // no loop detected
    }
    return dfs(0, -1) && n === visited.size;
  };