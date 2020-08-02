/**
Given a word, you need to judge whether the usage of capitals in it is right or not.

We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Otherwise, we define that this word doesn't use capitals in a right way.
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function(word) {
  let firstLetterCapital = word[0] === word[0].toUpperCase();
  let allLettersCapital = true;
  let allLettersLowercase = true;
  for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
          allLettersLowercase = false;
      }
      else if (word[i] === word[i].toLowerCase()) {
          allLettersCapital = false;
      }
  }
  return firstLetterCapital && allLettersCapital || firstLetterCapital && allLettersLowercase || allLettersLowercase
};
