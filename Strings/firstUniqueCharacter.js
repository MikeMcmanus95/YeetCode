// Leetcode URL: https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
/*
Given a string, find the first unique character in a
given string. You can assume that there is at least
one unique character in the string.

Example 1:

Input: "abaccdeff"
Output: "b"
Explanation: There is only one "b" and it is the first one

Input: "aabccd"
Output: "b"
Explanation: "b" is the first one

Time: O(n) | Space: O(1) if it's limited to only the 26 letters in the US alphabet
*/

function firstUniqueChar(s) {
  const map = {};

  for (const char of s) {
      if (map[char]) {
          map[char]++;
      } else {
          map[char] = 1;
      }
  }

  for (let i = 0; i < s.length; i++) {
      if (map[s[i]] === 1) {
          return i;
      }
  }

  return -1;

}



// const firstUniqChar = function(s) {
//   let freqCounter = {};
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     if (freqCounter[char] || freqCounter[char] === 0) {
//       freqCounter[char] = null;
//     } else if (freqCounter[char] === undefined) {
//       freqCounter[char] = i;
//     }
//   }
//   for (let key in freqCounter) {
//     if (freqCounter[key] !== null) return freqCounter[key];
//   }
//   return -1;
// };
