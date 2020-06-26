# Leetcode #1342: Number of Steps to Reduce a Number to Zero
# Section: Top Google Questions
# Difficulty: Easy
# URL: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

class Solution:
    def numberOfSteps (self, num: int) -> int:
        count = 0
        while num != 0:
            if num % 2 == 0:
                num = num / 2
            else:
                num -= 1
            count += 1
        return count

sol = Solution()
print(sol.numberOfSteps(12))
