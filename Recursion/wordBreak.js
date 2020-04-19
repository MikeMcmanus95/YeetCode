// Need to work on this one. Not done yet.

const wordBreak = function (s, wordDict) {
  let p = 0;
  let tempWord = '';
  let isValid = false;
  while (p <= s.length) {
    tempWord += s[p];
    p++;
    for (let i = 0; i < wordDict.length; i++) {
      let word = wordDict[i];
      if (tempWord === word) {
        isValid = wordBreak(s.slice(p, s.length), wordDict);
      }
    }
  }

  if (s.length) return isValid;
  else {
    isValid = true;
    return isValid;
  }
};
