// Time: O(n) Space: O(n) where n is the number of nodes.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const data = [];
  function traverse(node, sum) {
    sum += node.value;
    /* If our node has a left or right, traverse it. We need to wrap it in a
			 conditional to prevent accidently traversing a node that doesn't
			 exist.
		*/
    if (node.left) {
      traverse(node.left, sum);
    }
    if (node.right) {
      traverse(node.right, sum);
    }
    /* If our node has no left or right, we know we've hit a leaf and can
			 safely push to the array.
		*/
    if (!node.left && !node.right) {
      data.push(sum);
    }
  }

  // We begin with our root, passing in 0 because we're adding the root.
  traverse(root, 0);
  return data;
}
