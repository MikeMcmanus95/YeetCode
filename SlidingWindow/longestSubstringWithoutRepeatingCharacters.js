/*
Leetcode 3
https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

var lengthOfLongestSubstring = function(s) {
    let start = 0,
        maxLength = 0;
    const map = {};
    
    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        
        if (char in map) start = Math.max(start, map[char] + 1); //contract the window when you find a repeat character
        
        maxLength = Math.max(maxLength, end - start + 1); //update maxLength
        map[char] = end; //store what you've seen
    }
    
    return maxLength;
};