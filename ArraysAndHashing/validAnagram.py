"""
Leetcode 242 Valid Anagram
https://leetcode.com/problems/valid-anagram/


Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
"""

# Solution: build a hashmap, decrement and check if the map is empty
# Time: O(n+m) | Space: O(n)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        map = {}
        for char in s:
            if char not in map:
                map[char] = 1
            else:
                map[char] += 1
                
        for char in t:
            if char not in map:
                return False
            
            map[char] -= 1
            if map[char] == 0:
                map.pop(char)
            
        
        return True
        
# Sort both strings
# Time: O(n log n) | Space: O(1)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)

# Solution: create a frequency hashmap for both s and t and then compare those hashmaps
# Time: O(n + m) | Space: O(n + m)
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        sMap = {}
        tMap = {}
        
        for char in s:
            if char in sMap:
                sMap[char] += 1
            else:
                sMap[char] = 1
        
        for char in t:
            if char in tMap:
                tMap[char] += 1
            else:
                tMap[char] = 1
        
        return sMap == tMap