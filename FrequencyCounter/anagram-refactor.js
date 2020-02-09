/* Prompt: Given two strings, return true or false if str2 is an anagram of str1

  Implementation: If the lengths are not equal, return false. Otherwise, use a frequency counter to
  store the occurance of each letter in str1, by looping over str1. Then, loop over str2, checking if
  each letter exists in the object. If the character doesn't exist in the freq counter, return false.

  Time: O(n) Space: O(n)
*/
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return console.log(false);
  }
  let freqCounter = {};
  for (let val of str1) {
    freqCounter[val] ? (freqCounter[val] += 1) : (freqCounter[val] = 1);
  }
  for (let val of str2) {
    if (!freqCounter[val]) {
      return console.log(false);
    } else {
      freqCounter[val] -= 1;
    }
  }
  return console.log(true);
}

validAnagram('awesome', 'wesamoe'); // true
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false
validAnagram('texttwisttime', 'timetwisttext'); // true
