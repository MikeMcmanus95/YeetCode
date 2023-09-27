/*
Leetcode 17 Letter Combinations Of a Phone Number
https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
*/

var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    
    const MAP = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    
    const result = [];
    
    function permute(string, index) {
        //base case when we reach the end
        if (index === digits.length) {
            result.push(string);
            return;
        }
        
        //check all the neighbors
        for (const char of MAP[digits[index]]) {
            permute(string + char, index + 1);
        }
    }
    
    permute("", 0);
    
    return result;
};