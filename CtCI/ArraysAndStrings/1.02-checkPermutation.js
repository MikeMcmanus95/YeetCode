/*
Given two strings, write a method to decide if one is a permutation of the other.

Similar to Leetcode 242 - Valid Anagram
*/

const checkPermuation = function(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (const char of s) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    for (const char of t) {
        map[char]--;
        if (map[char] === 0) {
            delete map[char];
        }
    }

    return !Object.keys(map).length;
}