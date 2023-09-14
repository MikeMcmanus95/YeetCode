/*
Leetcode 1249
https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
*/

var minRemoveToMakeValid = function(s) {
    const OPEN = '(';
    const CLOSE = ')';
    const stack = []; //stores only indices for OPEN brackets
    const toRemove = new Set(); //stores the left over indices from stack because of the excellent look up time

    for (let i = 0; i < s.length; i++) {
      let char = s[i];

      if (char === OPEN) {
        stack.push(i);
      } else if (char === CLOSE) {
        if (stack.length) { //we've found a pair, let's pop it off
          stack.pop();
        } else { //any extras/non pairs gets put into the set
          toRemove.add(i);
        }
      }
    }

    //combine stack indices to the toRemove set to use as a look up later
    stack.forEach((element) => toRemove.add(element));

    //modify s string in array format
    const sArray = [...s];

    for (let i = 0; i < sArray.length; i++) {
      if (toRemove.has(i)) {
        sArray[i] = null;
      }
    }

    return sArray.join("");
};