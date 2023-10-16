/*
Leetcode 249 - Group Shifted Strings
https://leetcode.com/problems/group-shifted-strings/

We can shift a string by shifting each of its letters to its successive letter.

For example, "abc" can be shifted to be "bcd".
We can keep shifting the string to form a sequence.

For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
Given an array of strings strings, group all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

 

Example 1:

Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]
Example 2:

Input: strings = ["a"]
Output: [["a"]]
*/

var groupStrings = function(strings) {
    const hash = new Map();
    
    for (const s of strings) {
        let key = "";
        
        for (let i = 1; i < s.length; i++) {
            let diff = s.charCodeAt(i) - s.charCodeAt(i - 1);
            
            if (diff < 0) {
                diff += 26;
            }
            
            key += diff + '-';
        }
        
        if (!hash.has(key)) {
            hash.set(key, []);
        }
        
        hash.get(key).push(s);
    }
    
    return [...hash.values()];
};