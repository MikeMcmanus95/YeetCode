// AlgoExpert URL: algoexpert.io/questions/BST%20Construction

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const newNode = new BST(value);
    let currentNode = this;
    if (!currentNode) return newNode;
    else {
      while (true) {
        if (value > currentNode.value) {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          }
          else {
            currentNode.right = newNode;
            break;
          }
        }
        else if (value < currentNode.value) {
          if (currentNode.left) {
            currentNode = currentNode.left;
            continue;
          }
          else {
            currentNode.left = newNode;
            break;
          }
        }
        else {
          if (currentNode.right) {
            currentNode = currentNode.right;
            continue;
          }
          else {
            currentNode.right = newNode;
            break;
          }
        }
      }
    }
    return this;
  }

  contains(value) {
    if (this.value === value) {
      return true;
    }
    else {
      let queue = [this];
      let currentNode;
      while (queue.length) {
        currentNode = queue.shift();
        if (currentNode.value === value) return true;
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
      return false;
    }
  }

  remove(value, parentNode = null) {
    let currentNode = this;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      else {
        if (currentNode.left && currentNode.right) {
          currentNode.value = currentNode.right.getMinValue();
          // currentNode.value = smallest value of right subtree
          currentNode.right.remove(currentNode.value, currentNode);
        }
        else if (!parentNode) {
          if (currentNode.left) {
            currentNode.value = currentNode.left.value;
            currentNode.right = currentNode.left.right;
            currentNode.left = currentNode.left.left;
          }
          else if (currentNode.right) {
            currentNode.value = currentNode.right.value;
            currentNode.left = currentNode.right.left;
            currentNode.right = currentNode.right.right;
          }
          // Edge case: if we're removing the root node, and it has no children.
          // Disucss this with interviewer.
          // else {
          // 	currentNode.value = null;
          // }
        }
        else if (parentNode.left === currentNode) {
          currentNode.left ? parentNode.left = currentNode.left : parentNode.left = currentNode.right;
        }
        else if (parentNode.right === currentNode) {
          currentNode.left ? parentNode.right = currentNode.left : parentNode.right = currentNode.right;
        }
        break;
      }
    }
    return this;
  }

  getMinValue() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

