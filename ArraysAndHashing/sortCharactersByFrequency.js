/*
Leetcode 451
https://leetcode.com/problems/sort-characters-by-frequency/description/

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Time: O(n) | Space: O(n)
*/

var frequencySort = function(s) {
    const freqMap = new Map();
    const bucket = [];

    for(let char of s) {
        //freqMap.set(char, (freqMap.get(char) || 0) + 1);

        if (!freqMap.has(char)) freqMap.set(char, 0);
        freqMap.set(char, freqMap.get(char) + 1);
    }
    
    for(let [char, freq] of freqMap) {
        if (bucket[freq] === undefined) bucket[freq] = [char];
        else bucket[freq].push(char);
    }
    
    let result = '';
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i] === undefined) continue;
        
        for(let char of bucket[i]) {
            result += char.repeat(i);
        }
    }
    return result;   
};