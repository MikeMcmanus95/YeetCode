// Add chars to hashmap from beginning
// expand window
// windowLen++
// maxWindowLen = windowLen
// char not in hashmap ? add to hashmap
// while hashmap.length > k
// shrink window until length <= k
// decrement frequency along the way
// delete key if freq = 0

// str = "abbcccd" k = 2
// output: 5 ("bbccc")
// charCount: {c : 3, d: 1 }
// windowStart = 3
// windowLen = 4
// maxWinLen = 5

function longestSubstringWithKDistinct(str, k) {
  const charCount = {};
  let windowStart = 0,
    windowLength = 0,
    maxWindowLength = -Infinity;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    charCount[str[windowEnd]] ? charCount[str[windowEnd]]++
      : charCount[str[windowEnd]] = 1;
    windowLength++;

    if (Object.keys(charCount).length <= k && windowLength > maxWindowLength)
      maxWindowLength = windowLength;

    while (Object.keys(charCount).length > k) {
      charCount[str[windowStart]]--;
      if (charCount[str[windowStart]] === 0)
        delete charCount[str[windowStart]];
      windowStart++;
      windowLength--;

    }

    if (windowLength > maxWindowLength)
      maxWindowLength = windowLength;
  }

  return maxWindowLength === -Infinity ? 0 : maxWindowLength;
}
