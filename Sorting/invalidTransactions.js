/*
Leetcode URL: https://leetcode.com/problems/invalid-transactions/
A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.



Example 1:

Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
Output: ["alice,20,800,mtv","alice,50,100,beijing"]
Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.
Example 2:

Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
Output: ["alice,50,1200,mtv"]
Example 3:

Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
Output: ["bob,50,1200,mtv"]
*/

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
