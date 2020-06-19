function isMatch(text, pattern) {
  debugger;
  if (text.length === 0 && pattern.length === 0) {
    return true;
  }

  // "bbbb"  "b*b"

  // If second pattern char is a star, slice both characters
  if (pattern[1] === '*') {
    isMatch(text.substring(1), pattern.substring(2));
  }

  // Check each individual character
  if (text[0] === pattern[0] || pattern[0] === '.') {
    return isMatch(text.substring(1), pattern.substring(1));
  }
  else if (text[0] !== pattern[0]) {
    return false;
  }
}

console.log(isMatch('aa', 'a*'));
