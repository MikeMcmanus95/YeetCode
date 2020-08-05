// Leetcode #208: Implement Trie

class Node {
  constructor() {
      this.keys = new Map();
      this.end = false;
  }

  setEnd = function() {
      this.end = true;
  }

  isEnd = function() {
      return this.end;
  }
}

const Trie = function() {
  this.root = new Node();
};

/**
* Inserts a word into the trie.
* @param {string} word
* @return {void}
*/
// Time: O(n) | Space: O(n)
Trie.prototype.insert = function(word) {
  let node = this.root;
  let currentIdx = 0;
  while (currentIdx < word.length) {
      // Check if node contains the first letter of input string
      if (!node.keys.has(word[currentIdx])) {
          node.keys.set(word[currentIdx], new Node());
      }
      // If there is already a letter in that location
      node = node.keys.get(word[currentIdx]);
      currentIdx++;
  }
  node.setEnd();
};

/**
* Returns if the word is in the trie.
* @param {string} word
* @return {boolean}
*/
// Time: O(n) | Space: O(1)
Trie.prototype.search = function(word, isPrefixSearch = false) {
  let node = this.root;
  let currentIdx = 0;
  while (currentIdx < word.length - 1) {
      if (!node.keys.has(word[currentIdx])) {
          return false;
      } else {
          node = node.keys.get(word[currentIdx]);
          currentIdx++;
      }
  }
  // We reach the final node/char, we check if that node exists, and if its the end of a word.
  if (isPrefixSearch) {
      return node.keys.has(word[currentIdx]);
  } else {
      return node.keys.has(word[currentIdx]) &&   node.keys.get(word[currentIdx]).isEnd();
  }

};

/**
* Returns if there is any word in the trie that starts with the given prefix.
* @param {string} prefix
* @return {boolean}
*/
// Time: O(n) | Space: O(1)
Trie.prototype.startsWith = function(prefix) {
  return this.search(prefix, true);
};
