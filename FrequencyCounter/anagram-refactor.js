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
