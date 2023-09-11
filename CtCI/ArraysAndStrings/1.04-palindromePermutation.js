/*
Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards
and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary
words. You can ignore casing and non-letter characters.

Example:
Input: Tact Coa
Output: True (permutations: "taco cat", "atco cta", etc)

Approach: the set will only hold odd numbered characters

Time: O(n) | Space: O(1)
*/

const palindromePermutation = function(s) {
    const set = new Set();

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (set.has(char)) {
            set.delete(char);
        } else {
            set.add(char);
        }    
    }

    return set.size <= 1;
}