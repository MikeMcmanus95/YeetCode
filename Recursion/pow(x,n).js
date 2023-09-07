/*
Leetcode 50
https://leetcode.com/problems/powx-n/description

Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/

//This approach takes it from O(n) to O(log n) because you're cutting the exponent in half
//There are a few edge cases:
//When base = 0, return 0
//when exp = 0, return 1
//when exp is neg return 1/result
//In the recursive call stack, when exp is odd, you have to multiply result by the base
const calculatePower = function(base, exp) {
    if (base === 0) return 0;
    if (exp === 0) return 1;

    let tempResult = calculatePower(base, Math.floor(exp / 2));

    tempResult = tempResult * tempResult;

    if (exp % 2 === 1) tempResult = tempResult * base;
        
    return tempResult;
}

var myPow = function(base, exp) {
    let result = calculatePower(base, Math.abs(exp));

    return exp >= 0 ? result : (1 / result);
};
