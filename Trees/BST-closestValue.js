// Time: O(log n) on average, O(n) worst case Space: O(log n) on average, O(n) worst case. Since we're using recursion.
/* Implementation: Traverse the tree, keep track of the diff between the closest
	 value and the target, compare that with the diff between current node and
	 target. If current node is greater than target, we know to traverse the left
	 of the tree. If current node is less than the target, we know to traverse the right.
	 Else, if the current node is equal, closest = current node and break.
*/

function findClosestValueInBst(tree, target) {
  let closest = Infinity;
  let current = tree;

  function traverse(node) {
    let firstDiff = Math.abs(closest - target);
    let secondDiff = Math.abs(node.value - target);
    if (secondDiff < firstDiff) closest = node.value;
    if (node.left !== null && node.value > target) {
      traverse(node.left);
    } else if (node.right !== null && node.value < target) {
      traverse(node.right);
    }
  }
  traverse(current);
  return closest;
}

// Closest Value in Binary Tree
// Iterative approach using binary search
// Time: O(H) | Space: O(1)
const closestValue = function(root, target) {
  let val = root.val;
  let closest = root.val;
  while (root !== null) {
      val = root.val;
      closest = Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
      root = target < root.val ? root.left : root.right;
  }
  return closest;
};
