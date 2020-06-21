// Leetcode URL: https://leetcode.com/problems/flip-equivalent-binary-trees/

// Time O(n) | Space O(h)
const flipEquiv = function (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false
  if (root1.val !== root2.val) return false;

  let isEquivalent = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
  let isFlipEquivalent = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

  return isEquivalent || isFlipEquivalent;
};
