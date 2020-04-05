const twoCitySchedCost = function (costs) {
  // Sort in descending order by absolute difference between cost of city a & b
  costs.sort((a, b) => Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]));
  // Keep track of total cost, arr length / 2 and city A & B count
  let total = 0;
  let N = Math.floor(costs.length / 2);
  let countCityA = 0,
    countCityB = 0;

  // The ones who have a higher difference between City A and B, we send them
  // to city A first if the cost for that is lower, and until we reach N.
  // For the remaining people, the difference is less, and we send them to city B.
  for (let i = 0; i < costs.length; i++) {
    if ((costs[i][0] < costs[i][1] && countCityA < N) || countCityB === N) {
      total += costs[i][0];
      countCityA++;
    } else {
      total += costs[i][1];
      countCityB++;
    }
  }

  return total;
};
