/*
Leetcode 198 - House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.
*/

var rob = function(nums) {
    const dp = new Array(nums.length).fill(0);
    
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < nums.length; i++) {
        let currMoney = nums[i];
        
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + currMoney);
    }
    
    return dp[nums.length - 1];
};

/*
[5] --> 5

[5,10] --> 10

[1,5,3,5,6]
[1,5,5,10,11]
          i
        a
      b



       5
    1     3
      6  5]


arr = [1,2,3,4,5]
arr1 = [1,2,3,4]
arr2 = [2,3,4,5]

house_robber_1(arr) -> solved :)

house_robber_2(arr) -> max(house_robber_1(arr1), house_robber_2(arr2))


House Robber 2: (same as regular house_robber except neighborhood is circular)

 - if it's circular, that means that the endpoints are connected

 - house robber 2, circular neighborhood is identical to house robber 1, where the solution is that we either
    - look out all of the houses except the first
    - look at all of the houses except for the last
    return the max


*/