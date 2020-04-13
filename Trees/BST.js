class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // O(log n) best and average case
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // O(log n) best and average case
  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }
    return current || false;
  }

  BFS() {
    let result = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  dfsPreorder() {
    let result = [];
    let current = this.root;
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return result;
  }

  dfsPostorder() {
    let result = [];
    let current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(current);
    return result;
  }

  dfsInorder() {
    let result = [];
    let current = this.root;
    const traverse = (node) => {
      node.left && traverse(node.left);
      result.push(node.value);
      node.right && traverse(node.right);
    };
    traverse(current);
    return result;
  }
}

/*
  BINARY SEARCH TREE
         10
        /   \
       6     15
      / \      \
     3   8      20
*/
let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log(tree);

// Pre Order: Self -> Left -> Right -> Repeat
console.log('PREORDER: ', tree.dfsPreorder()); // [10, 6, 3, 8, 15, 20]
// Post Order: Left -> Right -> Self -> Repeat
console.log('POSTORDER: ', tree.dfsPostorder()); // [3, 8, 6, 20, 15, 10]
// In Order: Left -> Self -> Right -> Repeat
console.log('INORDER: ', tree.dfsInorder()); // [3, 6, 8, 10, 15, 20]

/*

  ------- BFS vs. DFS -------
  In a tree that is very wide but not very deep, DFS will have better space
  complexity than BFS. This is because we're adding every node to the queue at
  each level. The opposite is true for a tree that is very deep but not
  wide, BFS will have better space complexity as DFS will store each level above
  on the call stack.

  As far as time complexity, they are the same.

  --- PreOrder, Inorder, Postorder compared ---
  Inorder can be useful because in a Binary Search Tree, it will return all
  values in their numerical order in an array.

  PreOrder will return the values as they appear in the tree, in an array. This
  can be useful if you want to export or copy the tree somewhere else to be easily
  restructured from array format.
*/
