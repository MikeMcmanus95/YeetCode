// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

/**
 *
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
  let result = 0;

  const depth = function(node) {
      if (node === null) return 0;
      const left = depth(node.left);
      const right = depth(node.right);
      result = Math.max(result, left + right);
      return Math.max(left, right) + 1;
  }

  depth(root);
  return result;
};



