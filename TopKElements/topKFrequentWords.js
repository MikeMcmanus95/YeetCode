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


// Solution 2: Max Heap
// Time: O(n log(k)) | Space: O(n)
const Heap = require('../Trees/Heaps/Heap');

function compare(a, b) {
	if (wordCounter.get(a) === wordCounter.get(b)) {
    return a.localeCompare(b);
  } else {
    return wordCounter.get(a) - wordCounter.get(b);
  }
}

const topKFrequentHeap = (words, k) => {
  const wordCounter = new Map();
  for (let word of words) {
    wordCounter.has(word) ? wordCounter.set(word, wordCounter.get(word) - 1) : wordCounter.set(word, -1)
  }

  const maxHeap = new Heap(compare, [...wordCounter.keys()]);
  const resultArr = [];

  for (let i = 1; i <= k; i++) {
    resultArr.push(maxHeap.remove());
  }
  return resultArr;
}

let arr = ["i", "love", "leetcode", "i", "love", "coding"]
let k = 2;
console.log(topKFrequentHeap(arr, k));
