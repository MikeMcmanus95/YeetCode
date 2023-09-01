/*
Leetcode 139
https://leetcode.com/problems/word-break/description/

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
*/

var wordBreak = function(s, wordDict) {
    if (!wordDict) return false;
    
    //create dp table with the length of s elements and set the first element as true. 
    //when s(i) is a word that can be formed from wordDict, store it as true in the table
    const dp = new Array(s.length + 1);
    dp[0] = true;
    
    //i is for the s index
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) { //j is for the dp index
            if (dp[i]) break; //don't need to set dp if it's already true
            
            let sub = s.substring(i, j); //get the substring between i and up to j
            let index = wordDict.indexOf(sub); //find if your sub is in wordDict
            if (dp[j] && index >= 0) { //prev (dp[j]) + current substring (s.substring(i,j))
                dp[i] = true;
                break;
            }
        }
    }
    
    return Boolean(dp[s.length]); //undefined will evaluate to false
};