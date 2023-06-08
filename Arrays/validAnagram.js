/*
Leetcode 242
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Solution: build a hashmap, decrement and check if the map is empty

Time: O(n+m) | Space: O(n)
*/

function validAnagram(s, t) {
    const set = new Set();
  
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
  
    return false;
  }