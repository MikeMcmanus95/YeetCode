/*
Leetcode 1647
https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/description

A string s is called good if there are no two different characters in s that have the same frequency.
Given a string s, return the minimum number of characters you need to delete to make s good.
The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

Example 1:
Input: s = "aab"
Output: 0
Explanation: s is already good.

Example 2:
Input: s = "aaabbbcc"
Output: 2
Explanation: You can delete two 'b's resulting in the good string "aaabcc".
Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
Example 3:

Input: s = "ceabaacb"
Output: 2
Explanation: You can delete both 'c's resulting in the good string "eabaab".
Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
*/

var minDeletions = function(s) {
    const freqMap = {};
    const usedFreq = new Set();
    let deletions = 0;

    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    for (const val of Object.values(freqMap)) {
        let freq = val; //can omit this for a slight optimization but it's easier to understand the code with it here
        while (freq > 0 && usedFreq.has(freq)) {
            freq--;
            deletions++;
        }
        usedFreq.add(freq);
    }
    
    return deletions;
};