/*
// Leetcode URL: https://leetcode.com/problems/group-anagrams/submissions/
Leetcode 49
Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */


//Time & Space: O(m*n) | O(n)

function groupAnagrams(strs) {
  function makeKey(word) {
    const arr = new Array(26).fill(0);

    for (const char of word) {
      arr[char.charCodeAt() - 97]++;
    }

    return JSON.stringify(arr);
  }

  const map = {};

  for (const word of strs) {
    const key = makeKey(word);

    if (!map[key]) {
      map[key] = [word];
    } else {
      map[key].push(word);
    }

    return [...Object.values(map)];
  }
}

