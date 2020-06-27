function wordCountEngine(document) {
  debugger;
  let wordMap = {};
  let wordList = document.split(" ");
  let maxCount = 0;

  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i].toLowerCase();

    let charArray = [];
    for (let char of word) {
      if (char >= 'a' && char <= 'z') {
        charArray.push(char);
      }
    }

    let cleanWord = charArray.join("");

    if (cleanWord.length < 1) {
      continue;
    }

    let count = 0;
    if (cleanWord in wordMap) {
      count = wordMap[cleanWord]
      count++;
    }
    else {
      count = 1;
    }

    if (count > maxCount) maxCount = count;

    wordMap[cleanWord] = count;
  }

  let counterList = Array(maxCount + 1).fill(null);
  let wordCounterList;

  for (let word in wordMap) {
    let counter = wordMap[word];
    wordCounterList = counterList[counter];

    if (wordCounterList === null) {
      wordCounterList = [];
    }

    wordCounterList.push(word);
    counterList[counter] = wordCounterList;
  }

  // Iterate through list in reverse order and add only non null values to result
  let result = [];
  for (let i = counterList.length - 1; i >= 0; i--) {
    wordCounterList = counterList[i];
    if (wordCounterList === null) continue;
    for (let j = 0; j < wordCounterList.length; j++) {
      result.push([wordCounterList[j], i]);
    }
  }
  return result;
}


console.log(wordCountEngine("Practice makes perfect, you'll get perfecT by practice. just practice! just just just!!"));
