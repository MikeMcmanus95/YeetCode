/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
  isSubsequence('hello', 'hello world') // true
  isSubsequence('sing', 'sting') // true
  isSubsequence('abc', 'abracadabra') // true
  isSubsequence('abc', 'acb') // false - order matters
 */

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    } else if (str1[i] !== str2[j]) {
      j++;
    }
  }
  if (str1.slice(0, i) === str1) {
    return true;
  }
  return false;
}

console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('abc', 'acb'));
