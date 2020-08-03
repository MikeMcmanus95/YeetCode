/* Given a string, return true whether the string is a palindrome or not
ex: isPaldindrome('xxyxx') // true

O(n) time
O(1) space

*/

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
