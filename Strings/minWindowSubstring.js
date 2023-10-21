/*
Leetcode 76 - Minimum Window Substring
https://leetcode.com/problems/minimum-window-substring/

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.


Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
*/

var minWindow = function(s, t) {
    const needMap = new Map();
    for (const char of t) {
        needMap.set(char, needMap.get(char) + 1 || 1);
    }
    const needCount = needMap.size;
    
    const haveMap = new Map();
    let haveCount = 0;
    let minWindowString = "";
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        let char = s[end];
        
        //mark as visited
        if (needMap.has(char)) {
            haveMap.set(char, haveMap.get(char) + 1 || 1);
        }
        
        //increment count
        if (haveMap.has(char) && needMap.get(char) === haveMap.get(char)) {
            haveCount++;
        }
        
        
        //while loop to shrink the window
        while (haveCount === needCount) {
            if (!minWindowString || end - start + 1 < minWindowString.length) {
                minWindowString = s.slice(start, end + 1);
            }
            
            //start shrinking
            let sChar = s[start];
            if (needMap.get(sChar) > haveMap.get(sChar) - 1) {
                haveCount--;
            }
            
            //haveMap.get(startChar) > 1 ? haveMap.set(startChar, haveMap.get(startChar) - 1) : haveMap.delete(startChar);
            if (haveMap.get(sChar) > 1) {
                haveMap.set(sChar, haveMap.get(sChar) - 1);
            } else {
                haveMap.delete(sChar);
            }
            
            start++;
        }
    }
    
    
    
    return minWindowString;
};
