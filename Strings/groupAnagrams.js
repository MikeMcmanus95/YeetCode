// AlgoExpert URL: https://www.algoexpert.io/questions/Group%20Anagrams
// O(w * n * log(n)) time | O(wn) space
function groupAnagrams(words) {
  let anagrams = {};
  for (let word of words) {
    let sortedWord = sortString(word);
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

function sortString(string) {
  let strArr = string.split('');
  strArr.sort();
  return strArr.join('');
}

// Leetcode URL: https://leetcode.com/problems/group-anagrams/submissions/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*
Approach:
    -Create a hash table of anagrams
    -Loop over strs array
        -Sort each word individually and add it to hash table
            -if in hash table, push to array
            -else add to hash table
    -Return hashtable.values

Time & Space: O(w * nlog(n)) | O(wn)

*/
const groupAnagrams = function(strs) {
  const anagrams = new Map();
  for (const word of strs) {
      const sortedWord = sortWord(word);
      if (anagrams.has(sortedWord)) {
          anagrams.get(sortedWord).push(word);
      } else {
          anagrams.set(sortedWord, [word]);
      }
  }
  return [...anagrams.values()];
}

const sortWord = function(word) {
  const wordArr = word.split("");
  wordArr.sort();
  return wordArr.join("");
}
