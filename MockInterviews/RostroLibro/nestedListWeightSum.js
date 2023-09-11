/*
Leetcode 339
https://leetcode.com/problems/nested-list-weight-sum/description/

You are given a nested list of integers nestedList. Each element is either an integer or a list whose elements may also be integers or other lists.

The depth of an integer is the number of lists that it is inside of. For example, the nested list [1,[2,2],[[3],2],1] has each integer's value set to its depth.

Return the sum of each integer in nestedList multiplied by its depth.



Example 1:
Input: nestedList = [[1,1],2,[1,1]]
Output: 10
Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.

Example 2:
Input: nestedList = [1,[4,[6]]]
Output: 27
Explanation: One 1 at depth 1, one 4 at depth 2, and one 6 at depth 3. 1*1 + 4*2 + 6*3 = 27.

Example 3:
Input: nestedList = [0]
Output: 0
*/

var depthSum = function(nestedList) {
    return helper(nestedList, 1);
};

const helper = function(nestedList, depth) {
    let sum = 0;

    for (const el of nestedList) {
        if (el.isInteger()) {
            sum += el.getInteger() * depth;
        } else {
            sum += helper(el.getList(), depth + 1);
        }
    }

    return sum;
}

//written as dfs
var depthSum = function(nestedList) {
    return dfs(nestedList, 1);
    
    function dfs(list, depth) {
        let sum = 0;
        
        for (const element of list) {
            if (element.isInteger()) {
                const val = element.getInteger();
                sum += (val * depth);
            }
            else {
                const subList = element.getList();
                sum += dfs(subList, depth + 1);
            }
        }
        
        return sum;
    }
};

//written as BFS with level order
var depthSum = function(nestedList) {
    if (!nestedList.length) return 0;
    
    let queue = nestedList;
    let depth = 1;
    let sum = 0;
    
    while (queue.length) {
        let nextGen = [];
        
        while (queue.length) {
            let curr = queue.shift();
            
            if (curr.isInteger()) {
                sum += curr.getInteger() * depth;
            } else {
                nextGen.push(...curr.getList());
            }
        }
        depth++;
        queue = nextGen;
    }
    return sum;
};