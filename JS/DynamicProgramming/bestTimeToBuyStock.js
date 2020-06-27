// leetcode URL https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = function(prices) {
  let profit = 0;
  let min = Infinity,
    minDex = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      minDex = i;
      for (let i = minDex; i < prices.length; i++) {
        let difference = prices[i] - min;
        if (difference > profit) profit = difference;
      }
    }
  }

  return profit;
};
