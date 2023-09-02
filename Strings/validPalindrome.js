/* 
Leetcode 125
https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

O(n) time
O(1) space

*/

var isPalindrome = function(s) {
  s = s.regex(`[A-Za-z0-9]`,'')
  
  let left = 0,
      right = s.length - 1;
  
  while (left < right) {
      if (s[left] !== s[right]) {
          return false;
      }
      left++;
      right--;
  }
  
  return true;
};

const isPalindrome = (string) => {
  let start = 0;
  let end = string.length - 1;
  while (start < end) {
    if (string[start] !== string[end]) return false;
    start++;
    end--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindromeRegex = function(s) {
  const freqCounter = {};
  s = formatString(s);
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--
  }
  return true;
};

const formatString = (string) => {
  let removeCapsRegex = /[A-Z]/g;
  string = string.replace(removeCapsRegex, (match) => match.toLowerCase());
  string = string.replace(/[.,\/#!$%@?\^&\*;:{}=\-_`~()\[\]"' ]/g,"");
  return string;
}

console.log(isPalindrome('xxyxx')); // true
console.log(isPalindromeRegex('`1[lo@l;1')); // true
