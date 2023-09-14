/*
Leetcode 1190
https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/

You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.


Example 1:
Input: s = "(abcd)"
Output: "dcba"

Example 2:
Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.

Example 3:
Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
*/

var reverseParentheses = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (char === ')') {
            let rev = '';
            while (stack.length && stack[stack.length - 1] !== '(') { //build string left to right
                rev += stack.pop();
            }
            
            stack.pop(); //pop '(' from the stack
            
            for (const char of rev) {//put it back in the stack
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};