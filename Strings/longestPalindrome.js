/**
 * @param {string} s
 * @return {number}
 */
// Time: O(n) | Space: O(n)
const longestPalindrome = function(s) {
  const charCounter = new Map();
  let totalLength = 0;
  let hasMiddleChar = false;
  for (let char of s) {
      charCounter.has(char) ? charCounter.set(char, charCounter.get(char) + 1) : charCounter.set(char, 1);
  }
  console.log(charCounter);
  for (let [key, value] of charCounter) {
      if (value % 2 === 0) {
          totalLength += value;
      } else if (value > 1) {
          totalLength += value - 1;
          hasMiddleChar = true;
      } else {
          hasMiddleChar = true;
      }
  }
  return hasMiddleChar ? totalLength + 1 : totalLength;
};
