/*
Leetcode 7
https://leetcode.com/problems/reverse-integer/description/

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

var reverse = function(x) {
    const isNegative = x < 0;
    
    let result = 0;
    
    x = Math.abs(x);
    
    while (x > 0) {
        //grab the last digit
        const modNumber = x % 10;
        
        //chop off the last digit from x
        x = Math.floor( x / 10 );
        
        //this is the current digit place you're on in the result
        result *= 10;
        
        //add modulo so that it's the first number in your result
        result += modNumber;
    }
    
    if (result > Math.pow(2, 31)) return 0;
    
    return isNegative ? result * -1 : result;
};