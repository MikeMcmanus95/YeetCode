/*
Leetcode URL: https://leetcode.com/problems/sort-characters-by-frequency/
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' `both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
*/
const frequencySort = function (s) {
  let hashMap = {};
  let result = '';
  for (let i = 0; i < s.length; i++) {
    hashMap[s[i]] ? hashMap[s[i]]++ : hashMap[s[i]] = 1;
  }

  Object.keys(hashMap).sort((a, b) => hashMap[b] - hashMap[a]).forEach((ele) => {
    result += ele.repeat(hashMap[ele]);
  })
  return result;
};
