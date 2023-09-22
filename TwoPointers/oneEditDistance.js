/*
Leetcode 161 One Edit Distance
https://leetcode.com/problems/one-edit-distance/

Given two strings s and t, return true if they are both one edit distance apart, otherwise return false.

A string s is said to be one distance apart from a string t if you can:

Insert exactly one character into s to get t.
Delete exactly one character from s to get t.
Replace exactly one character of s with a different character to get t.
 

Example 1:

Input: s = "ab", t = "acb"
Output: true
Explanation: We can insert 'c' into s to get t.
Example 2:

Input: s = "", t = ""
Output: false
Explanation: We cannot get t from s by only one step.
*/

var isOneEditDistance = function(s, t) {
    if (s === t) return false;
    
    const sLength = s.length;
    const tLength = t.length;
    
    if (Math.abs(sLength - tLength) > 1) return false;
    
    let i = 0;
    let j = 0;
    let diff = 0;
    
    while (i < sLength && j < tLength) {
        if (s[i] === t[j]) {
            i++;
            j++;
            continue;
        }
        
        if (diff) return false;
        
        diff++;
        
        if (sLength > tLength) i++;
        else if (tLength > sLength) j++;
        else {
            i++;
            j++;
        }
    }
    return true;
};


//Alternative way to write it
var isOneEditDistance = function(s, t) {
    const longer = s.length > t.length ? s : t;
    const shorter = s.length > t.length ? t : s;
    
    if (longer.length - shorter.length > 1) {
        return false;
    }
    
    let count = 0, i = 0, j = 0;
    
    while (i < longer.length) {
        if (longer[i] !== shorter[j]) {
            count++;

            if (longer.length > shorter.length) {
            	i++;
            	continue;
            }
        }
        
        i++;
        j++;
    }
    
    return count === 1;
};