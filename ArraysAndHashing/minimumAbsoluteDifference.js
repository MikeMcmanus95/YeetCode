/*
Leetcode 1200
https://leetcode.com/problems/minimum-absolute-difference/description/

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
*/

var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b); //sort the numbers in place

    const map = {}; //min:[pairs]
    let min = Infinity;
    let abs;

    for (let i = 1; i < arr.length; i++) { //start at 1
        let curr = arr[i];
        let prev = arr[i - 1];

        abs = Math.abs(curr - prev);

        if (abs < min) { //update min
            min = abs;
        }

        if (!map[abs]) {
            map[abs] = [];
        }

        map[abs].push([prev, curr]); //store it in the map
    }

    return map[min]; //return the list of pairs for min
};