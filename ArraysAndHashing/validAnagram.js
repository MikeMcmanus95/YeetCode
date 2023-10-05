/*
Leetcode 242 Valid Anagram
https://leetcode.com/problems/valid-anagram/


Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Solution: build a hashmap, decrement and check if the map is empty

Time: O(n+m) | Space: O(n)
*/

function validAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const map = {};

    for (let char of s) {
        if (!map[char]) {
            map[char] = 0;
        }
        map[char]++;
    }

    for (let char of t) {
        map[char]--;
        if (map[char] === 0) {
            delete map[char];
        }
    }

    return !Object.keys(map).length;
}