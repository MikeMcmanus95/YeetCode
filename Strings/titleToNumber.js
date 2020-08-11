/**
 * @param {string} s
 * @return {number}
 */
// "SS"
// Time: O(n) | Space: O(1)
const titleToNumber = function(s) {
  let lastIdx = s.length - 1;
  let columnNum = s.charCodeAt(lastIdx--) - 64;
  for (let i = 1; i < s.length; i++) {
      let charCode = s.charCodeAt(lastIdx--) - 64;
      columnNum += Math.pow(26, i) * charCode
  }
  return columnNum;
};
