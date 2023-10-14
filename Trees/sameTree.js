/*
Leetcode 100
https://leetcode.com/problems/same-tree/
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
Input: p = [1,2,3], q = [1,2,3]
Output: true


*/

// Recursive solution
//Time: O(n) | Space: O(n) is worst case in unbalanced tree
function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }


function isSameTree(rootA, rootB) {

  function dft(nodeA, nodeB) {
    //base cases    
    if (!nodeA && !nodeB) {
      return true;
    }
  
    if (!nodeA && nodeB ||
       nodeA && !nodeB) {
        return false;
     }

    if (nodeA.val !== nodeB.val) {
      return false;
    }
    
    //when to keep looking
    return dft(nodeA.left, nodeB.left) && dft(nodeA.right, nodeB.right);
  }

  return dft(rootA, rootB);
}

  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);


//Iterative Solution
//Time: O(n) | Space: O(n) is worst case in unbalanced tree
var isSameTree = function(p, q) {
    if (!p && !q) return true;

    if (!p || !q || p.val !== q.val) return false;

    let queueP = [p];
    let queueQ = [q];

    
    while (queueP.length && queueQ.length){
        let nodeP = queueP.shift()
        let nodeQ = queueQ.shift()
            
        if (nodeP.val !== nodeQ.val) return false
        if (nodeP.left && !nodeQ.left) return false
        if (nodeQ.left && !nodeP.left) return false
        if (nodeP.right && !nodeQ.right) return false
        if (nodeQ.right && !nodeP.right) return false
        
        if (nodeP.left) {
            queueP.push(nodeP.left)
            queueQ.push(nodeQ.left)
        }
        if (nodeP.right) {
            queueP.push(nodeP.right)
            queueQ.push(nodeQ.right)
        }
    }
    
    return true;
};