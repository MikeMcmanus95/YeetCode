/* Leetcode #208: Implement Trie
https://leetcode.com/problems/implement-trie-prefix-tree/
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
 
Example 1:

Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

Time: O(n) | Space: O(1)
*/

class TrieNode {
  constructor() {
      this.children = {};
      this.isEnd = false;
  }
}

class Trie {
  constructor() {
      this.root = new TrieNode();
  }

  //look to see if children is there, insert word, mark as end
  insert(word) {
      let curr = this.root;

      for (const char of word) {
          if (!curr.children[char]) {
              curr.children[char] = new TrieNode();
          }
          curr = curr.children[char];
      }
      curr.isEnd = true;
  }

  //search word, return isEnd
  search(word) {
      let curr = this.root;

      for (const char of word) {
          if (!curr.children[char]) {
              return false;
          }
          curr = curr.children[char];
      }
      return curr.isEnd;
  }

  //search word, return true or return false early if it's not there
  startsWith(word) {
      let curr = this.root;

      for (const char of word) {
          if (!curr.children[char]) {
              return false;
          } else {
              curr = curr.children[char];
          }
      }
      return true;
  }
}

// class Node {
//   constructor() {
//       this.keys = new Map();
//       this.end = false;
//   }

//   setEnd = function() {
//       this.end = true;
//   }

//   isEnd = function() {
//       return this.end;
//   }
// }

// const Trie = function() {
//   this.root = new Node();
// };

// /**
// * Inserts a word into the trie.
// * @param {string} word
// * @return {void}
// */
// // Time: O(n) | Space: O(n)
// Trie.prototype.insert = function(word) {
//   let node = this.root;
//   let currentIdx = 0;
//   while (currentIdx < word.length) {
//       // Check if node contains the first letter of input string
//       if (!node.keys.has(word[currentIdx])) {
//           node.keys.set(word[currentIdx], new Node());
//       }
//       // If there is already a letter in that location
//       node = node.keys.get(word[currentIdx]);
//       currentIdx++;
//   }
//   node.setEnd();
// };

// /**
// * Returns if the word is in the trie.
// * @param {string} word
// * @return {boolean}
// */
// // Time: O(n) | Space: O(1)
// Trie.prototype.search = function(word, isPrefixSearch = false) {
//   let node = this.root;
//   let currentIdx = 0;
//   while (currentIdx < word.length - 1) {
//       if (!node.keys.has(word[currentIdx])) {
//           return false;
//       } else {
//           node = node.keys.get(word[currentIdx]);
//           currentIdx++;
//       }
//   }
//   // We reach the final node/char, we check if that node exists, and if its the end of a word.
//   if (isPrefixSearch) {
//       return node.keys.has(word[currentIdx]);
//   } else {
//       return node.keys.has(word[currentIdx]) &&   node.keys.get(word[currentIdx]).isEnd();
//   }

// };

// /**
// * Returns if there is any word in the trie that starts with the given prefix.
// * @param {string} prefix
// * @return {boolean}
// */
// // Time: O(n) | Space: O(1)
// Trie.prototype.startsWith = function(prefix) {
//   return this.search(prefix, true);
// };
