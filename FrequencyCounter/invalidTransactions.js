// Leetcode URL: https://leetcode.com/problems/invalid-transactions/

const invalidTransactions = function (transactions) {
  let invalid = new Set();
  let info = [];

  // Add each transaction to an array of objects
  for (let trans of transactions) {
    let [name, time, amt, city] = trans.split(',');
    info.push({ name, time, amt, city, raw: trans });
  }

  // Sort each element by time ascending
  info.sort((a, b) => Number(a.time) - Number(b.time));

  // Add elements to invalid array if amt > 1000
  info.forEach((trans) => {
    if (Number(trans.amt) > 1000) invalid.add(trans.raw);
  });

  for (let i = 0; i < info.length; i++) {
    let curr = info[i];
    let nextIdx = i + 1;

    while (nextIdx < info.length && info[nextIdx].time - curr.time <= 60) {
      let nameIsSame = info[nextIdx].name === curr.name;
      let cityIsDifferent = info[nextIdx].city !== curr.city;

      if (nameIsSame && cityIsDifferent) {
        invalid.add(curr.raw);
        invalid.add(info[nextIdx].raw);
      }
      nextIdx++;
    }
  }

  return Array.from(invalid);
};
