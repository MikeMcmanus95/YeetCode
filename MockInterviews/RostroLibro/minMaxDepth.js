/**
 * Return the min & max depths in the binary tree,
 * as a tuple [min, max].
 * Each node has "left" and "right".
 */

/*

                3 
               / \
              9   20
                 /  \
                15   7


*/
function minMaxDepth(root) {
    let queue = [[root, 1]];
    let max = -Infinity;
    let min = Infinity;
  
    while (queue.length) {
      //let nextGen = [];
  
      //while (queue.length) {
        let [currNode, currLevel] = queue.shift();
  
        if (currNode.left) {
          queue.push([currNode.left, currLevel + 1]);
        }
        if (currNode.right) {
          queue.push([currNode.right, currLevel + 1]);
        }
  
        if (!currNode.left && !currNode.right) {
          min = Math.min(min, currLevel);
          max = Math.max(max, currLevel);
        }
      //}
  
      //queue = nextGen;
    }
  
    return [min, max];
  }
  
  console.log(minMaxDepth({
    val: 3,
    left: {
      val: 9,
      left: undefined,
      right: undefined,
    },
    right: {
      val: 20,
      left: {
        val: 15,
        left: undefined,
        right: undefined,
      },
      right: {
        val: 7,
        left: undefined,
        right: undefined,
      }
    }
  }));
  
  
  /*
  
                  3 
                 / \
                9   20
                   /  \
                  15   7
  */