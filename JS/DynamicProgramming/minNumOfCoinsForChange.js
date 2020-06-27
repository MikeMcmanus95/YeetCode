// AlgoExpert URL: https://www.algoexpert.io/questions/Min%20Number%20Of%20Coins%20For%20Change
// Time: O(nd) | Space: O(n)
function minNumberOfCoinsForChange(n, denoms) {
  const coins = Array(n + 1).fill(Infinity);
  coins[0] = 0;
  for (let amount = 1; amount < n + 1; amount++) {
    for (let denom of denoms) {
      if (denom <= amount) {
        let coinsAtDenom = Math.floor(amount / denom);
        let remainder = amount % denom;
        coins[amount] = Math.min(coins[amount], coinsAtDenom + coins[remainder]);
      }
    }
  }
  return coins[n] === Infinity ? -1 : coins[n];
}
