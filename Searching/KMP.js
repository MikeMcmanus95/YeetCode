function knuthMorrisPrattAlgorithm(string, substring) {
  let table = generatePattern(substring);
  let result = matchPattern(string, substring, table);
  return result;
}

function generatePattern(string) {
  let i = 0;
  let j = 1;
  let table = Array(string.length).fill(0);
  while (j <= string.length) {
    if (string[i] !== string[j]) {
      if (i > 0) {
        i = table[i - 1];
      } else {
        j++;
      }
    } else {
      table[j] = i + 1;
      i++;
      j++;
    }
  }
  return table;
}

function matchPattern(string, substring, table) {
  let i = 0;
  let j = 0;
  while (j <= string.length) {
    if (substring[i] !== string[j]) {
      if (i > 0) {
        i = table[i - 1];
      } else {
        j++;
      }
    }
    if (substring[i] === string[j]) {
      if (i === substring.length - 1) return true;
      i++;
      j++;
    }
  }
  return false;
}

console.log(generatePattern('abcaby'));
console.log(matchPattern('abxabcabcaby', 'abcaby', [0, 0, 0, 1, 2, 0]));
