/*
Leetcode 43
https://leetcode.com/problems/multiply-strings/
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.


Example 1:
Input: num1 = "2", num2 = "3"
Output: "6"

Example 2:
Input: num1 = "123", num2 = "456"
Output: "56088"

Approach:
Start from right to left, perform multiplication on every pair of digits, and add them together
*/

var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';

    const m = num1.length,
          n = num2.length,
          result = new Array(n + m).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const p1 = i + j;
            const p2 = p1 + 1;

            const sum = result[p2] + Number(num1[i]) * Number(num2[j]);

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    if (result[0] === 0) result.shift();

    return result.join('');
};