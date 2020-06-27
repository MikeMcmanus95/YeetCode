/*
input:
A non negative integer

output:
true or false depending on if the squares of the numbers digits and all subsequent digit sums reach 1.

edge cases:
The number is 0, the number is 1

approach:
fast and slow pointers.
*/

function findHappyNumber(num) {
  let slow = num,
    fast = num;

  while (true) {
    slow = findSquareSum(slow); // move one step
    fast = findSquareSum(findSquareSum(fast)); // move two steps
    if (slow === fast) break; // found the cycle
  }
  return slow === 1; // is the cycle 1?
}


function findSquareSum(num) {
  let sum = 0;

  while (num > 0) {
    // get first digit
    digit = num % 10;
    // add square to sum
    sum += digit * digit;
    // divide num by 10 to get the next digit
    num = Math.floor(num / 10);
  }
  return sum;
}
