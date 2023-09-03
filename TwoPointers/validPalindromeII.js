/*
Leetcode 680
https://leetcode.com/problems/valid-palindrome-ii/description/

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false
*/

const checkPalindrome = function(s, left, right) {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  var validPalindrome = function(s) {
      let left = 0,
          right = s.length - 1;
  
      while (left < right) {
        if (s[left] !== s[right]) {
          return checkPalindrome(s, left + 1, right) || checkPalindrome(s, left, right - 1);
        }
        left++;
        right--;
      }
  
      return true;
  };