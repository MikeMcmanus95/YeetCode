"""
Leetcode 217 Contains Duplicate
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Example 1:

Input: nums = [1,2,3,1]
Output: true
"""

# Time O(n) | Space O(n)
class Solution:
    def containsDuplicate(self, num: List[int]) -> bool:
        mySet = set()

        for n in nums:
            if n in mySet:
                return True
            mySet.add(n)

        return False

# Time O(n log n) | Space O(1)
class Solution:
    def containsDuplicate(self, nums: List[int]) --> bool:
        nums.sort()
        l = 0
        r = l + 1

        while (r < len(nums)):
            if nums[l] == nums[r]:
                return True
            l = l + 1
            r = r + 1

        return False


# Time O(n^2) | Space O(1)
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    return True

        return False
        