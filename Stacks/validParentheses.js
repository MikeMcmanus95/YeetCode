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

        if (val) { //looking at closed and the stack holds closed ones
            stack.push(val);
        } else if (stack.pop() !== char) {
            return false;
        }
    }

    return !stack.length;
};

//Alternative way to approach this is with the BRACKETS flipped, so BRACKETS is when I'm
//looking at closed and stack is holding the open ones
function validParens(s) {
    const BRACKETS = {
      ")" : "(",
      "}" : "{",
      "]" : "["
    }
  
    const stack = [];
  
    for (const char of s) {
      let val = BRACKETS[char]; // undefined
  
      if (val) { //looking at closed 
        // so i should pop the stack and verify it matches
        if (stack.pop() !== val) {
          return false;
        }
      } else {
        // looking at open, so push on to the stack
        stack.push(char);
      }
    }
  
    return !stack.length;
  }