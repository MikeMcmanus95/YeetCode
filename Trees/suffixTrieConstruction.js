// AlgoExpert URL: https://www.algoexpert.io/questions/Suffix%20Trie%20Construction

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  // O(n^2) Time | O(n^2) space | n = string input
  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringStartingAt(i, string);
    }
  }

  insertSubstringStartingAt(index, string) {
    let currentNode = this.root;
    for (let j = index; j < string.length; j++) {
      let letter = string[j];
      if (!currentNode[letter]) currentNode[letter] = {};
      currentNode = currentNode[letter];
    }
    currentNode[this.endSymbol] = true;
  }

  // O(m) time | O(1) space | m = query string
  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!node[letter]) return false;
      node = node[letter];
    }
    return this.endSymbol in node;
  }
}
