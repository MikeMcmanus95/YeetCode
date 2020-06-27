function isMatch(text, pattern) {
  debugger;
  if (text.length === 0 && pattern.length === 0) {
    return true;
  }

  // "bbbb"  "b*b"

  // If second pattern char is a star, slice both characters
  if (pattern[1] === '*') {
    return isMatch(text.substring(1), pattern.substring(2));
  }

  // Check each individual character
  if (text[0] === pattern[0] || pattern[0] === '.') {
    return isMatch(text.substring(1), pattern.substring(1));
  }
  else if (text[0] !== pattern[0]) {
    return false;
  }
}

// function isMatchHelper(text, pattern, textIndex, patIndex) {
//   // base cases - one of the indexes reached the end of text or pattern
//   if (textIndex >= text.length) {
//     if (patIndex >= pattern.length):
//       return true
//     else:
//       if (patIndex + 1 < pattern.length) AND(pattern[patIndex + 1] == '*'):
//         eturn isMatchHelper(text, pattern, textIndex, patIndex + 2)
//       else:
//         return false

//     else if (patIndex >= pattern.length) AND(textIndex < text.length):
//   return false

//     // string matching for character followed by '*'
//     else if (patIndex + 1 < pattern.length) AND(pattern[patIndex + 1] == '*'):
//   if (pattern[patIndex] == '.') OR(text[textIndex] == pattern[patIndex]):
//   return (isMatchHelper(text, pattern, textIndex, patIndex + 2) OR
//   isMatchHelper(text, pattern, textIndex + 1, patIndex))
//         else:
//   return isMatchHelper(text, pattern, textIndex, patIndex + 2)

//     // string matching for '.' or ordinary char.
//     else if (pattern[patIndex] == '.') OR
//     (pattern[patIndex] == text[textIndex]):
//   return isMatchHelper(text, pattern, textIndex + 1, patIndex + 1)
//     else:
//   return false

// }


console.log(isMatch('aa', 'a*'));
