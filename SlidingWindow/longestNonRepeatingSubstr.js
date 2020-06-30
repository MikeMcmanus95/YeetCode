// 'aabccbb' 'abc'
// s
// e
// charCount = { c: 4, b: 5 }
// maxLen = 3


// SOLUTION 1:
// O(n) Time | O(n) space
function nonRepeatSubstring(str) {
  const charCounter = {};
  let windowStart = 0,
    maxSubstringLength = -Infinity;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    if (!charCounter[char]) {
      charCounter[char] = windowEnd;
    } else {
      while (windowStart < windowEnd) {
        delete charCounter[str[windowStart]]
        windowStart++;
      }
      charCounter[char] = windowEnd;
    }

    maxSubstringLength = Math.max(Object.keys(charCounter).length, maxSubstringLength);
  }

  return maxSubstringLength === -Infinity ? 0 : maxSubstringLength;
}

// SOLUTION 2:
// O(n) time | O(n) space
function nonRepeatSubstring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charIndexMap) {
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }

    charIndexMap[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
