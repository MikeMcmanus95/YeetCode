/*
Given a binary tree, return the total number of leaf nodes.
*/

// type Node {
//   left: ?Node,
//   right: ?Node,
// }

//not storing count
function numLeaves(root) {
    function dft(node) {
        let count = 0;
        if (node.left) count += dft(node.left);
        if (node.right) count += dft(node.right);
        if (!node.left && !node.right) count++;
    }

    return dft(root);
}


//storing count
function numLeaves(root) {
    let count = 0;
    function dft(node) {
      if (node.left) dft(node.left);
      if (node.right) dft(root.right);
      if (!node.left && !node.right) count++;
    }
    dft(root);
    return count;
  }
  
  console.log(numLeaves({
    left: {
      left: null,
      right: null,
    },
    right: {
      left: {left: null, right: null},
      right: null,
    }
  }));