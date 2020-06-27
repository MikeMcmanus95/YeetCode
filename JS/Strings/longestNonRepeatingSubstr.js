function nonRepeatSubstring(str) {
  const charCounter = {};
  let windowStart = 0,
    maxSubstringLength = -Infinity;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let char = str[windowEnd];
    if (!charCounter[char]) {
      charCounter[char] = 1;
    } else {
      charCounter[char] = 1;
      let charToRemove = str[windowStart];
      delete charCounter[charToRemove];
      windowStart++;
    }

    maxSubstringLength = Math.max(Object.keys(charCounter).length, maxSubstringLength);
  }

  return maxSubstringLength === -Infinity ? 0 : maxSubstringLength;
}
