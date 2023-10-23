/*
Leetcode 322 - Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
*/

var coinChange = function(coins, amount) {
    const MAX = Number.MAX_SAFE_INTEGER;
    
    const dp = new Array(amount + 1).fill(MAX);
    
    dp[0] = 0; // this is saying we don't need any coins to add up to the amount 0
    
    for (let i = 1; i <= amount; i++) { //each index in dp starting at 1
        for (const currCoin of coins) {
            if (currCoin <= i) { // this in case the coins are not sorted in ascending order
                const change = dp[i - currCoin] + 1;
                dp[i] = Math.min(dp[i], change);
            }
        }
    }
    
    if (dp[amount] === MAX) return -1; // this is in case where you use up all the coins, but cannot add up to the amount.
    return dp[amount];
};

