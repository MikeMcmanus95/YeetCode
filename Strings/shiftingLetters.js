/*
Leetcode 848 Shifting Letters
https://leetcode.com/problems/shifting-letters/

You are given a string s of lowercase English letters and an integer array shifts of the same length.

Call the shift() of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.
Now for each shifts[i] = x, we want to shift the first i + 1 letters of s, x times.

Return the final string after all such shifts to s are applied.

Example 1:
Input: s = "abc", shifts = [3,5,9]
Output: "rpl"
Explanation: We start with "abc".
After shifting the first 1 letters of s by 3, we have "dbc".
After shifting the first 2 letters of s by 5, we have "igc".
After shifting the first 3 letters of s by 9, we have "rpl", the answer.

Example 2:
Input: s = "aaa", shifts = [1,2,3]
Output: "gfd"
*/

var shiftingLetters = function(s, shifts) {
    const size = shifts.length;
    
    for (let i = size - 2; i >= 0; i--) {
        shifts[i] += shifts[i + 1];
    }
    
    let result = "";
    
    for (let i = 0; i < size; i++) {
        const currPosition = s.charCodeAt(i) - 97; //0-26 so b would be position 1
        const shift = shifts[i];
        
        const newPosition = (currPosition + shift) % 26; //to get the remainder
        const newChar = String.fromCharCode(newPosition + 97); //make it ascii again
    
        result += newChar;
    }
    
    return result;
};