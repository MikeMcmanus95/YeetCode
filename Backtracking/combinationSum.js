/*
Leetcode 39
https://leetcode.com/problems/combination-sum/

Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 
Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

                             O
                             / \
                          [2]   []
                          /\     /\
                    [2,2]  [2]  [3] []
                    /\     /\   /\  /\
            [2,2,2]  [2,2] 
            /\          / \
   [2,2,2,2] [2,2,2] [2,2,3] [2,2]     
   
   Because we can use the same number in the candidates array to add to the target (2x2x2x2 = 8) and we want to make
   sure that our result has unique numbers and not permutations, we have to make sure that every time we make a decision,
   we're deciding not to add anymore of iteself. For example, starting at the node, we decide to add 2 and the other one is an empty array (base case).
   then from the 2 we decide to add 2 to itself and also we don't want to add anymore 2's so we want to add numbers from the candidates array.

   N is the number of candidates, T is the target value, M is the minimal value among the candidates
   Time: O(N^(T/M)+1)| Space: O(T/M)

Example to explain time complexity:
candidates = [3,4,5]
If target T = 9, we have 10 possible combinations:
[]
[3], [3,3], [3,3,3], [3,4,4], [3,5]
[4], [4,4]
[5], [5,5]

10^(9/3) = 30
*/

//alternative way to write it using backtracking
var combinationSum = function(candidates, target) {
    const result = [];
    
    function explore(temp, idx) {
        let tempSum = getSum(temp);
        
        if (tempSum(temp) > target) return;
        
        if (tempSum(temp) === target) {
            result.push([...temp]);
            return;
        }
        
        for (let i = idx; i < candidates.length; i++) {
            let el = candidates[i];
            temp.push(el);
            explore(temp, i);
            temp.pop();
        }
    }
    
    explore([], 0);
    
    return result;
};

const getSum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}



//alternative way to write it using backtracking
var combinationSum = function(candidates, target) {
    const result = [];
    const tempArr = [];

    function backtracking(cIndex, sum) {
        if (sum > target) return;
        if (sum === target) {
            result.push([...tempArr]);
            return;
        }

        for (let i = cIndex; i < candidates.length; i++) {
            tempArr.push(candidates[i]);
            backtracking(i, sum + candidates[i]);
            tempArr.pop();
        }
    }

    backtracking(0, 0);
    
    return result;
};