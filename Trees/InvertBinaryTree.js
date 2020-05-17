// O(n) Time, O(d) or O(log n) Space
function invertBinaryTree(tree) {
  invert(tree);
}

const invert = (node) => {
  const temp = node.left;
  node.left = node.right;
  node.right = temp;
  if (node.left) invert(node.left);
  if (node.right) invert(node.right);
}
