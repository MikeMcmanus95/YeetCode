/** 
 * Leetcode 347
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Solution 1: Create a hashMap where the number/value is on the left and the frequency is on the right.
Convert the hashset to an array called bucket where the index is the frequency and the container holds an array of the numbers.
Look at the bucket starting from the end and put in into a result array while the length is not greater than k

Time: O(n) || Space: O(n)
 */
function topKFrequent(nums, k) {
  const freqMap = new Map();

  for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const bucket = new Array(nums.length).fill(0);

  for (const [num, freq] of freqMap) {
      if (!bucket[freq]) {
          bucket[freq] = [num];
      } else {
          bucket[freq].push(num);
      }
  }

  let i = bucket.length - 1;
  let result = [];

  while (i > 0 && result.length < k) {
      if (bucket[i]) {
          result.push(...bucket[i]);
      }
      i--;
  }

  return result;
};


/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// Solution 2: Sorting
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


// Solution 3: Max Heap
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
