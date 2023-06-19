/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Time: O(n) | Space: O(n)
*/

function isValid(s) {
    const BRACKETS = {
        "[":"]",
        "{":"}",
        "(":")"
    }

    const stack = [];
    for (const char of s) {
        const val = BRACKETS[char];

        if (val) {
            stack.push(val);
        } else if (stack.pop() !== char) {
            return false;
        }
    }

    return !stack.length;
};