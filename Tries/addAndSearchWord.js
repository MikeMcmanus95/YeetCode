/**
 * Initialize your data structure here.
 */
class Node {
  constructor() {
      this.keys = {};
      this.isEnd = false;
  }

  setEnd = function() {
      this.isEnd = true;
  }

  getEnd = function() {
      return this.isEnd;
  }
}


const WordDictionary = function() {
  this.root = new Node();
};

/**
* Adds a word into the data structure.
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let node = this.root;
  let currentIdx = 0;

  while (currentIdx < word.length) {
      if (!node.keys[word[currentIdx]]) {
          node.keys[word[currentIdx]] = new Node();
      }
      node = node.keys[word[currentIdx]];
      currentIdx++;
  }
  node.setEnd();
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  function find(node, currentIdx) {
      let char = word[currentIdx];
      if (currentIdx >= word.length) {
          return node.getEnd();
      }
      if (char === '.') {
          for (const key in node.keys) {
              if (find(node.keys[key], currentIdx + 1)) return true;
          }
          return false;
      } else if (char in node.keys){
          return find(node.keys[char], currentIdx + 1);
      } else {
          return false;
      }
  }
  return find(this.root, 0)
};
