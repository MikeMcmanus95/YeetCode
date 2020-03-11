/* If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.
For example: [‘H’, ‘i’, ‘!’, ‘ ’] */

function largestUniqueSetOfChars(paragraph) {
  let result = [];
  let textLength = paragraph.length;
  let freqCounter = {};

  if (textLength < 50) return 'Paragraph must have a minimum of 50 characters!';

  // Populate frequency counter with each occurance of every character.
  for (let i = 0; i < textLength; i++) {
    let char = paragraph[i];
    freqCounter[char] ? freqCounter[char]++ : (freqCounter[char] = 1);
  }

  let keys = Object.keys(freqCounter);
  // Sort each character in descending order from most - least frequent
  let descendingOrderChars = keys.sort(
    (a, b) => freqCounter[b] - freqCounter[a]
  );

  // Loop over keys array, grabbing the least frequent elements using Array.pop()
  // Decrement textLength by the number of occurences of that char
  while (descendingOrderChars.length) {
    let lastChar = descendingOrderChars.pop();
    let lastCharCount = freqCounter[lastChar];
    textLength -= lastCharCount;
    // Break before pushing if count goes below 50.
    if (textLength <= 50) break;
    result.push(lastChar);
  }

  return result;
}

let original =
  'If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.';

console.log(largestUniqueSetOfChars(original));
