/* Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

       3
      / \
     1    5
    /  \   \
   0    2   6
             \
              8
Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the binary tree.


*/


// p = 6
// q = 2

function leastCommonAncestor(root, p, q) {
  if (root.value > p && root.value > q) {
    return leastCommonAncestor(root.left, p, q);
  } else if (root.value < p && root.value < q) {
    return leastCommonAncestor(root.right, p, q);
  } else {
    return root;
  }
}

