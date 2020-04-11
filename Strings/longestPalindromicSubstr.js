/*
  Write a function that, given a string, returns its longest palindromic
  substring.

  A palindrome is defined as a string that's written the same forward and
  backward. Note that single-character strings are palindromes.

  You can assume that there will only be one longest palindromic substring.

  O(n^2) Time
  O(1) Space
*/

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
