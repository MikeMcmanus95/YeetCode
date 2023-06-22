/*
Leetcode 76
https://leetcode.com/problems/minimum-window-substring/description/

Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Time: O(n) | Space: O(n)
*/

function minWindow(s, t) {
    const tMap = new Map();

    for (const char of t) {
        tMap.set(char, (tMap.get(char) + 1 || 1));
    }

    let left = 0,
        have = 0;
    const need = tMap.size;
    const visited = new Map();
    let minWindow = "";

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        //if char is in tMap, mark it as visited
        if (tMap.has(char)) {
            visited.set(char, (visited.get(char) + 1) || 1)
        }

        //have++ if we have the required number of characters in visited
        if (visited.has(char) && tMap.get(char) === visited.get(char)) {
            have++;
        }

        while (have === need) {
            //update minWindow
            if (!minWindow || right - left + 1 < minWindow.length) {
                minWindow = s.slice(left, right + 1);
            }

            let leftChar = s[left];

            //if the letter we're about to remove causes us to no longer satisfy the count requirement then have--
            if (tMap.get(leftChar) > visited.get(leftChar) - 1) {
                have--;
            }

            //decrement or delete from visited
            visited.get(leftChar) > 1 ? visited.set(leftChar, visited.get(leftChar) - 1) : visited.delete(leftChar);

            //move the left pointer
            left++;
        }
    }

    return minWindow;
};