/*
Given two strings, return true if one is an anagram of the other.

Note: When dealing with deleting from a map, remember to deal with 
edge cases of undefined even though this solution works. Like if t.length > s.length;
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