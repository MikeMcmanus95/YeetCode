/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
/*

Approach:
    -Map out the keys and their indicies using a hash table
    -Loop over the characters in word and find the indicies in the map
        -Use a current index var to keep track of where finger is
        -Calculate the running total based on current index
    -Return total


Time & Space:
O(n) | O(n)
*/

const calculateTime = function(keyboard, word) {
  const keys = new Map();
  let total = 0;

  for (let i = 0; i < keyboard.length; i++) {
      keys.set(keyboard[i], i);
  }

  let currentIdx = 0;
  for (let char of word) {
      let charIdx = keys.get(char);
      let difference = Math.abs(currentIdx - charIdx);
      currentIdx = charIdx;
      total += difference;
  }

  return total;
};
