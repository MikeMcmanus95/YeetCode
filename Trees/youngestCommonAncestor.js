// This is an input class. Do not edit.
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

// SOLUTION 1:
// Time O(d) | Space O (d) - where d is the depth (height) of the tree
function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const visited = {};
  let p1 = descendantOne;
  let p2 = descendantTwo;
  while (p1 !== topAncestor || p2 !== topAncestor) {
    if (visited[p1.name] && p1 !== topAncestor) return p1;
    else visited[p1.name] = p1;
    if (p1.ancestor) p1 = p1.ancestor;

    if (visited[p2.name] && p2 !== topAncestor) return p2;
    else visited[p2.name] = p2;
    if (p2.ancestor) p2 = p2.ancestor;
  }
  return topAncestor;
}
