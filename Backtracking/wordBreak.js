// Solution 1: Backtracking & Recursion (Naive)
/*
For this solution, we check every possible prefix of s in the dictionary of words,
if its found in the dictionary, then the recursive function is called for the remaining portion of that string
and if its found in some function call that the complete string is in the dictionary, it returns true
*/
// Time: O(n^n) | Space: O(n)
function wordBreak(s, wordDict) {
  return wordBreakHelper(s, new Set(wordDict), 0);
}

function wordBreakHelper(s, wordDict, start) {
  if (start === s.length) return true;

  for (let end = start + 1; end <= s.length; end++) {
    if (wordDict.has(s.slice(start, end)) && wordBreakHelper(s, wordDict, end)) {
      return true;
    }
  }
  return false;
}


console.log(wordBreak("leetcode", ["leet", "code"])) // true
console.log(wordBreak("applepenapple", ["apple", "pen"])) // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
