/*
Leetcode 273
https://leetcode.com/problems/integer-to-english-words/description/

Convert a non-negative integer num to its English words representation.


Example 1:
Input: num = 123
Output: "One Hundred Twenty Three"

Example 2:
Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Example 3:
Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

const TRANSLATIONS = new Map([
    [1000000000, 'Billion'],
    [1000000, 'Million'],
    [1000, 'Thousand'],
    [100, 'Hundred'],
    [90, 'Ninety'],
    [80, 'Eighty'],
    [70, 'Seventy'],
    [60, 'Sixty'],
    [50, 'Fifty'],
    [40, 'Forty'],
    [30, 'Thirty'],
    [20, 'Twenty'],
    [19, 'Nineteen'],
    [18, 'Eighteen'],
    [17, 'Seventeen'],
    [16, 'Sixteen'],
    [15, 'Fifteen'],
    [14, 'Fourteen'],
    [13, 'Thirteen'],
    [12, 'Twelve'],
    [11, 'Eleven'],
    [10, 'Ten'],
    [9, 'Nine'],
    [8, 'Eight'],
    [7, 'Seven'],
    [6, 'Six'],
    [5, 'Five'],
    [4, 'Four'],
    [3, 'Three'],
    [2, 'Two'],
    [1, 'One'],
  ]);
  
  function numberToWords(num) {
    if (num === 0) return 'Zero';
    if (num <= 20) return TRANSLATIONS.get(num);
  
    const result = [];
  
    for (const [numericValue, wordValue] of TRANSLATIONS) {
      const diminisher = Math.floor(num / numericValue); //find the diminisher (opposite of multiplier)
      if (diminisher === 0) continue;
  
      num -= diminisher * numericValue; //update num by subtracting the big number
  
      if (diminisher === 1 && numericValue >= 100) { //if it's the case of a 'one' in the number to read
        result.push('One', wordValue);
        continue;
      } else if (diminisher === 1) { //when you need to push the word but it's not the case of 'one'
        result.push(wordValue);
        continue;
      }
  
      result.push(numberToWords(diminisher), wordValue); //recursive call for the rest of the numbers
    }
  
    return result.join(' ');
  }