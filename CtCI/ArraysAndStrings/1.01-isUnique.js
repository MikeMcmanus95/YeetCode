/*
Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures?

Return true if string has all unique characters

Similar to Leetcode 217 - Contains Duplicate
*/

const isUnique = function(s) {
    const set = new Set();

    for (const char of s) {
        if (set.has(char)) {
            return false;
        }
        set.add(char);
    }

    return true;
}