/*
Leetcode 3
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Given a string s, find the length of the longest 
substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

// 'aabccbb' 'abc'
// s
// e
// charCount = { c: 4, b: 5 }
// maxLen = 3


// SOLUTION 1:
// O(n) Time | O(n) space
function nonRepeatSubstring(str) {
  const charCounter = {};
  let windowStart = 0,
    maxSubstringLength = -Infinity;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    if (!charCounter[char]) {
      charCounter[char] = windowEnd;
    } else {
      while (windowStart < windowEnd) {
        delete charCounter[str[windowStart]]
        windowStart++;
      }
      charCounter[char] = windowEnd;
    }

    maxSubstringLength = Math.max(Object.keys(charCounter).length, maxSubstringLength);
  }

  return maxSubstringLength === -Infinity ? 0 : maxSubstringLength;
}

// SOLUTION 2:
//hashmap holds the character and the position.
//EXPAND the window when there's a character you've never come across before and update maxLength and store what you've visited
//CONTRACT when you've come across a character you've seen before, update your start pointer to make the window smaller
// O(n) time | O(n) space
function nonRepeatSubstring(s) {
  let start = 0,
      maxLength = -Infinity;
  const charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (char in charIndexMap) {
      start = Math.max(start, charIndexMap[char] + 1);
    }

    maxLength = Math.max(maxLength, end - start + 1);
  
    charIndexMap[char] = end;
  }

  return maxLength;
}
