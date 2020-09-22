/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// Solution 1: Sorting
// Time: O(n log(n)) | Space: O(n)
const topKFrequent = function(words, k) {
  const wordCounter = new Map();
  for (let word of words) {
      wordCounter.has(word) ? wordCounter.set(word, wordCounter.get(word) + 1) : wordCounter.set(word, 1)
  }

  const candidates = Array.from(wordCounter.keys());
  candidates.sort((w1, w2) =>
      wordCounter.get(w1) === wordCounter.get(w2) ? w1.localeCompare(w2) : wordCounter.get(w2) - wordCounter.get(w1));

  return candidates.slice(0, k);
};
