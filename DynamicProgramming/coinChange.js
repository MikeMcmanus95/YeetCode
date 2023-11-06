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
    dp[0] = 0;
    
    
    for (let amountIndex = 1; amountIndex < dp.length; amountIndex++) {
        for (const coin of coins) {
            if (amountIndex - coin >= 0) {
                const possibleMinNumOfCoins = dp[amountIndex - coin] + 1;
                dp[amountIndex] = Math.min(dp[amountIndex], possibleMinNumOfCoins);                
            }
        }
    }
    
    if (dp[amount] === MAX) return -1;
    return dp[amount];
};


/*
 - building up the solution from 0 to 350
 - coins consist of [1,5, 10, 25, 100]
    - inner loop we are iterating through the coins
     = dp[350] = infinity
      - coin = 1
        - a = 350, coin = 1, amount = 350
        - amount -1 == 350 - 1 == 349...is dp[349] + 1 OR what's currently in dp[350]

      - coin = 5
        - a = 350, coin = 5, amount 350
        - 345 is dp[345] + 1 OR what's currently dp[350]

     - coin = 10
        - is dp[340] + 1 OR what's currently in dp[350]





*/
var coinChange = function(coins, amount) {
    const MAX = Number.MAX_SAFE_INTEGER; 
    const dp = new Array(amount + 1).fill(MAX);
    dp[0] = 0; // this is saying we don't need any coins to add up to the amount 0
    
    for (let a = 1; a < amount + 1; a++) { //each index in dp starting at 1, where a is the possible amount
        for (const coin of coins) {
            if (a - coin >= 0) { //if it's negative then it's not a possibility because we're subtracting
                const change = dp[a - coin] + 1;
                dp[a] = Math.min(dp[a], change);
            }
        }
    }
    
    if (dp[amount] === MAX) return -1; // this is in case where you use up all the coins, but cannot add up to the amount.
    return dp[amount];
};

// [1,3,4,5] 7

// function minCoins(coins, target) {
//     let min = Infinity;

//     function explore(tempArr, idx) {
//         let tempSum = getSum(tempArr);
//         if (tempSum > target) return;
//         if (tempSum === target) {
//             min = Math.min(tempArr.length, min);
//         }

//         for (let i = idx; i < coins.length; i++) {
//             let el = coins[i];
//             tempArr.push(el);
//             explore(tempArr, i);
//             tempArr.pop();
//         }
//     }

//     explore([], 0)

//     return min;

//     function getSum(arr) {
//         return arr.reduce((acc, curr) => acc + curr, 0);
//     }
// }


/*

"each index in dp starting at 1, where a is the possible amount"
Concrete Example:
    "let's make 3.50 with pennies, nickels, quarters, dollars"
    amt = 350
    coins [1, 5, 25, 100]


    - Initialize each of the dp with "Infinity"

    dp[1] = "what is the minimum number of coins to make 1" = 1
    dp[2] = "...2" -> "Infinity"
    dp[3] = "...3"
    ...
    dp[350] "...350" -> solution


*/
