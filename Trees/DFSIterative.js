const DFS = (root, callback) => {
  let prev = null;
  let curr = root;
  let next = null;
  while (curr) {
    if (prev === curr.parent || prev === null) {
      if (curr.left) next = curr.left;
      else {
        callback(curr);
        next = curr.right ? curr.right : curr.parent;
      }
    }
    else if (prev === curr.left) {
      callback(curr);
      next = curr.right ? curr.right : curr.parent;
    }
    else {
      next = curr.parent;
    }

    prev = curr;
    curr = next;
  }
}
