// AlgoExpert URL: https://www.algoexpert.io/questions/Min%20Height%20BST

// SOLUTION 1:
// Time O(n log n) | Space O(n)
// Naive solution. Uses the provided insertion method, which runs in log n time.
// calling it n times results in a time complexity of O(n log n)

function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  let valueToAdd = array[midIdx];

  if (!bst) bst = new BST(valueToAdd);
  else bst.insert(valueToAdd);

  // Left subarray
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  // Right subarray
  constructMinHiehgtBst(array, bst, midIdx + 1, endIdx);

  return bst;
}


// Time O(n) | Space O(n)
function minHeightBst(array) {
  return constructMinHeightBst(array, null, 0, array.length - 1);
}

function constructMinHeightBst(array, bst, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  newBstNode = new BST(array[midIdx]);
  if (!bst) bst = newBstNode;
  else {
    if (array[midIdx] < bst.value) {
      bst.left = newBstNode;
      bst = bst.left;
    }
    else {
      bst.right = newBstNode;
      bst = bst.right;
    }
  }
  // Left subarray
  constructMinHeightBst(array, bst, startIdx, midIdx - 1);
  // Right subarray
  constructMinHiehgtBst(array, bst, midIdx + 1, endIdx);

  return bst;
}

// Time O(n) | Space O(n)
function minHeightBst(array) {
  return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(array, startIdx, endIdx) {
  if (endIdx < startIdx) return;
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  bst = new BST(array[midIdx]);
  bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
  bst.right = constructMinHiehgtBst(array, midIdx + 1, endIdx);
  return bst;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
