/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function(root) {
  const mapper = new Map();
  const outputArray = [];
  function dfs(x, y, node) {
      if (node === null) return;

      dfs(x - 1, y + 1, node.left);
      dfs(x + 1, y + 1, node.right);

      mapper.has[x,y] ? mapper.get([x,y]).push(node.val) : mapper.set([x,y], [node.val])
  }
  dfs(0, 0, root);
  let old = -Infinity;
  const sortedMapper = [...mapper.entries()].sort((a, b) => {
      if (a[0][0] < b[0][0]) return -1;
      if (a[0][0] > b[0][0]) return 1;

      if (a[0][1] < b[0][1]) return -1;
      if (a[0][1] > b[0][1]) return 1;

      if (a[1][0] < b[1][0]) return -1;
      if (a[1][0] > b[1][0]) return 1;
  })
  sortedMapper.forEach((key) => {
      if (key[0][0] !== old) outputArray.push([])
      console.log(key);
      outputArray[outputArray.length - 1].push(key[1])
      old = key[0][0]
  });

  return outputArray;
};
