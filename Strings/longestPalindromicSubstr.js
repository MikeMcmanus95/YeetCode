/*
  Leetcode 5
  https://leetcode.com/problems/longest-palindromic-substring/
  
  Write a function that, given a string, returns its longest palindromic
  substring.

  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.

  You can assume that there will only be one longest palindromic substring.

  O(n^2) Time
  O(1) Space
*/

var longestPalindrome = function(s) {
  function expand(left, right) {
      while (left >= 0 && s[left] === s[right]) { //this checks if we're within bounds
          if (maxString.length < right - left + 1) { //if we pass the previous check then we can 
            //update our maxString because we've found a new and longer palindrome than the previous one
              maxString = s.slice(left, right + 1);
          }
          //expand outwards
          left--;
          right++;
      }
  }
  
  let maxString = "";
  
  for (let i = 0; i < s.length; i++) {
      expand(i, i);
      expand(i, i + 1); //this is an edge case of even palindromes
  }
  
  return maxString;
};

function longestPalindromicSubstring(string) {
  if (string.length === 1) return string;
  let substr = '';
  for (let i = 0; i < string.length; i++) {
    let evenPalindrome = isPalindrome(string, i, i + 1);
    let oddPalindrome = isPalindrome(string, i - 1, i + 1);
    let longest =
      evenPalindrome.length > oddPalindrome.length
        ? evenPalindrome
        : oddPalindrome;
    substr = longest.length > substr.length ? longest : substr;
  }
  return substr;
}

function isPalindrome(string, left, right) {
  let palindrome = string[(left + right) / 2] || '';
  while (left >= 0 && right < string.length) {
    if (string[left] !== string[right]) break;
    palindrome = string[left] + palindrome + string[right];
    left--;
    right++;
  }
  return palindrome;
}
