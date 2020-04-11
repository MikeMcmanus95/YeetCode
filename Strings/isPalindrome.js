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

console.log(isPalindrome('xxyxx'));
