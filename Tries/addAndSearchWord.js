/*
Leetcode 211
https://leetcode.com/problems/design-add-and-search-words-data-structure/
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
*/
/**
 * Initialize your data structure here.
 */

class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class WordDictionary {
     constructor() {
         this.root = new TrieNode();
     }

     addWord(word) {
         let curr = this.root;

         for (const char of word) {
             if (!curr.children[char]) {
                 curr.children[char] = new TrieNode();
             }
             curr = curr.children[char];
         }

         curr.isWord = true;
     }

     search(word) {
         const dfs = (index, node) => {
             let curr = node;

             for (let i = index; i < word.length; i++) {
                 const char = word[i];

                 if (char === '.') {
                     for (const child of Object.values(curr.children)) {
                         if (dfs(i+1, child)) return true;
                     }
                     return false;
                 } else {
                     if (!curr.children[char]) return false;
                     curr = curr.children[char];
                 }
             }

             return curr.isWord;
         }

         return dfs(0, this.root);
     }

 }



// class Node {
//   constructor() {
//       this.keys = {};
//       this.isEnd = false;
//   }

//   setEnd = function() {
//       this.isEnd = true;
//   }

//   getEnd = function() {
//       return this.isEnd;
//   }
// }


// const WordDictionary = function() {
//   this.root = new Node();
// };

// /**
// * Adds a word into the data structure.
// * @param {string} word
// * @return {void}
// */
// WordDictionary.prototype.addWord = function(word) {
//   let node = this.root;
//   let currentIdx = 0;

//   while (currentIdx < word.length) {
//       if (!node.keys[word[currentIdx]]) {
//           node.keys[word[currentIdx]] = new Node();
//       }
//       node = node.keys[word[currentIdx]];
//       currentIdx++;
//   }
//   node.setEnd();
// };

// /**
// * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
// * @param {string} word
// * @return {boolean}
// */
// WordDictionary.prototype.search = function(word) {
//   function find(node, currentIdx) {
//       let char = word[currentIdx];
//       if (currentIdx >= word.length) {
//           return node.getEnd();
//       }
//       if (char === '.') {
//           for (const key in node.keys) {
//               if (find(node.keys[key], currentIdx + 1)) return true;
//           }
//           return false;
//       } else if (char in node.keys){
//           return find(node.keys[char], currentIdx + 1);
//       } else {
//           return false;
//       }
//   }
//   return find(this.root, 0)
// };
