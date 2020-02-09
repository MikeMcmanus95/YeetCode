/* Write a function called sameFrequency, given two integers, find whether the two integers have the same frequency of digits

Sample input:
  sameFrequency(281, 182) // true
  sameFrequency(14, 34) // false

Implementation: Use a frequency counter to check if an arguement occurs more than once.

Time: O(n) Space: O(n)
*/

function sameFrequency(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);
  if (num1.length !== num2.length) {
    return false;
  }
  let freqCounter = {};
  for (let digit of num1) {
    freqCounter[digit] ? freqCounter[digit]++ : (freqCounter[digit] = 1);
  }
  for (let digit of num2) {
    if (!freqCounter[digit]) {
      return false;
    } else {
      freqCounter[digit]--;
    }
  }
  return true;
}

console.log(sameFrequency(12355, 55312));
