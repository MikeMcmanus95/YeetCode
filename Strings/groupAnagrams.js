// AlgoExpert URL: https://www.algoexpert.io/questions/Group%20Anagrams
// O(w * n * log(n)) time | O(wn) space
function groupAnagrams(words) {
  let anagrams = {};
  for (let word of words) {
    let sortedWord = sortString(word);
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

function sortString(string) {
  let strArr = string.split('');
  strArr.sort();
  return strArr.join('');
}
