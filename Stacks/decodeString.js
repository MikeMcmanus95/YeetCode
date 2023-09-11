/*
Leetcode 394 
https://leetcode.com/problems/decode-string

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
*/

var decodeString = function(s) {
  if (!s) return '';

  const stack = [];

  for (const char of s) {
      if (char === ']') {
          let tempString = "";

          //Grab all the characters before open bracket
          while (stack[stack.length - 1] !== "[") {
              tempString = stack.pop() + tempString;
          }

          //Discard '['
          stack.pop();

          let numString = "";

          //While stack has a length and the character we're at is a number...
          while (stack.length && !isNaN(stack[stack.length - 1])) {
              numString = stack.pop() + numString;
          }

          //Use the repeat method based on the number we grabbed
          tempString = tempString.repeat(Number(numString));

          //Push each character of our newly generated string to store it in our stack
          for (const c of tempString) {
              stack.push(c);
          }
      } else {
          stack.push(char);
      }
  }

  return stack.join('');
};
