/*
Leetcode 1328 Break a Palindrome
https://leetcode.com/problems/break-a-palindrome/

Given a palindromic string of lowercase English letters palindrome, replace exactly one character 
with any lowercase English letter so that the resulting string is not a palindrome and that it is 
the lexicographically smallest one possible.

Return the resulting string. If there is no way to replace a character to make it not a palindrome, 
return an empty string.

A string a is lexicographically smaller than a string b (of the same length) if in the first position 
where a and b differ, a has a character strictly smaller than the corresponding character in b. 
For example, "abcc" is lexicographically smaller than "abcd" because the first position they differ 
is at the fourth character, and 'c' is smaller than 'd'.
*/

var breakPalindrome = function(palindrome) {
    if (palindrome.length === 1) { //edge case where a single character is a palindrome
        return "";
    }
    
    palindrome = palindrome.split("");
    
    for (let i = 0; i < Math.floor(palindrome.length / 2); i++) { //because it's a palindrome, only need to run it until you hit the center
        const char = palindrome[i];
        
        if (char !== 'a') {
            palindrome[i] = 'a'; //change the first occurance of a 'non-a' to an 'a'
            return palindrome.join("");
        }
    }
    
    palindrome[palindrome.length - 1] = "b"; //edge case where they're all a's
    
    return palindrome.join("");
};