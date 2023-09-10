/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient
space at the end to hold the additional characters, and that you are given the "true" length of the string.

Example:
Input: "Mr John Smith    ", 13
Output: "Mr%20John%20Smith%20"
*/

const URLify = function(s, trueLength) {
    let result = "";

    for (let i = 0; i < trueLength; i++) {
        if (s[i] === ' ') {
            result += '%20';
        } else {
            result += s[i];
        }
    }

    return result;
}