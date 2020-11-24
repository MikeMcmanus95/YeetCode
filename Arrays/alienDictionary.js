// Leetcode URL: https://leetcode.com/problems/verifying-an-alien-dictionary/

// Time: O(n * m) | O(1) Space
const isAlienSorted = function (words, order) {
  const dict = {};
  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i;
  }
  // iterate thru each word
  for (let i = 0; i < words.length - 1; i++) {
    //compare first 2 words at a time
    // compare "first" character to "first" char in order
    // if same, look at next char
    // if diff, first match is FIRST
    let word1 = words[i];
    let word2 = words[i + 1];
    let longer = Math.max(word1.length, word2.length);
    for (let j = 0; j < longer; j++) {
      let char1 = word1[j];
      let char2 = word2[j];
      if (char1 && char2) {
        if (char1 !== char2 && dict[char2] < dict[char1]) {
          return false;
        } else if (char1 !== char2 && dict[char1] < dict[char2]) {
          break;
        }
      } else if (!char2 && char1) {
        return false;
      }
    }
  }
  return true;
};
