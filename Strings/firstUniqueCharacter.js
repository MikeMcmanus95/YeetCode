// Leetcode URL: https://leetcode.com/problems/first-unique-character-in-a-string/submissions/

const firstUniqChar = function(s) {
  let freqCounter = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (freqCounter[char] || freqCounter[char] === 0) {
      freqCounter[char] = null;
    } else if (freqCounter[char] === undefined) {
      freqCounter[char] = i;
    }
  }
  for (let key in freqCounter) {
    if (freqCounter[key] !== null) return freqCounter[key];
  }
  return -1;
};
