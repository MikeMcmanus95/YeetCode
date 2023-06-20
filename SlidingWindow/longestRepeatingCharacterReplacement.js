/*
Leetcode 424
https://leetcode.com/problems/longest-repeating-character-replacement/description/

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.
*/

function characterReplacement(s, k) {
    let start = 0,
        mostFreq = 0,
        maxLength = -Infinity;
    const charFreqMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        //mark visited
        charFreqMap[char] = charFreqMap[char] + 1 || 1;

        //need mostFreq to know when to shrink window
        mostFreq = Math.max(mostFreq, charFreqMap[char]);

        //shrink window
        while (end - start + 1 - mostFreq > k) {
            let leftChar = s[start];
            charFreqMap[leftChar] -= 1;
            start++;
        }

        //update maxLength
        maxLength = Math.max(maxlength, end - start + 1);
    }

    return maxLength;
}
