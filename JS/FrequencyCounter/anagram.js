// Given two strings write a fucntion to determine if the second string is an anagram of the first.
// An anagram is a word, phrase or name formed by rearranging the ltters of another,
// such as cinema, formed by iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return console.log(false);
  }
  let freqCounter = {};
  for (let val of str1) {
    freqCounter[val] = (freqCounter[val] || 0) + 1;
  }
  for (let val of str2) {
    freqCounter[val] = (freqCounter[val] || 0) - 1;
  }

  for (let key in freqCounter) {
    if (freqCounter[key] === 1) {
      return console.log(false);
    }
    if (freqCounter[key] === -1) {
      return console.log(false);
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
