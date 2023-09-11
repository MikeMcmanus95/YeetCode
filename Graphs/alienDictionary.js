/*
Leetcode 269
https://leetcode.com/problems/alien-dictionary/description/

There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you.

You are given a list of strings words from the alien language's dictionary. Now it is claimed that the strings in words are 
sorted lexicographically
 by the rules of this new language.

If this claim is incorrect, and the given arrangement of string in words cannot correspond to any order of letters, return "".

Otherwise, return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there are multiple solutions, return any of them.
*/

var alienOrder = function(words) {
    // use adjacency list to map every single char to a Set -> char: Set {char, char,...}
    // value Set indicates that these chars come after key char lexicographically
    const adj = {};
    for (const word of words) {
      for (const char of word) {
        adj[char] = new Set();
      }
    }
  
    // go through every pair of words 
    for (let i = 0; i < words.length - 1; i++) {
      let word1 = words[i];
      let word2 = words[i + 1];
      let minLength = Math.min(word1.length, word2.length);
  
      // if word2 is a prefix of word1 then it is an invalid order so return ''
      if ( 
        word1.length > word2.length &&
        word1.slice(0, minLength) === word2.slice(0, minLength)
      ) {
        return '';
      }
  
      // now go through each char of both words
      for (let j = 0; j < minLength; j++) {
        if (word1[j] !== word2[j]) { // if  char in both words don't match
          adj[word1[j]].add(word2[j]); // the char in word2 comes after the char in word1 lexicographically
          break; // because we only want the 1st different char in each pair of words
        }
      }
    }
  
    const visited = {}; // char: bool -> false = visited, true = current path, if does not exist then it hasn't been visited at all
    let result = ''; // list of lexico sorted letters. to be joined as a string later
  
    const dfs = (char) => { // if dfs returns true then it's detected a loop because it means it's in the current path
      if (char in visited) {
        return visited[char]; // 
      }
  
      //mark as visited --> true because it's in the current path
      visited[char] = true;
  
      for (const nei of adj[char]) { // check every char that is a neighbor of char
        if (dfs(nei)) { // run dfs on neighbor. if it returns true...
          return true; // ... then loop detected
        }
      }
  
      //unmark visit --> false because it means it's been visited but we're no longer in current path
      visited[char] = false;
      result = char + result; // add char to front of result string
    }
  
    //check every character in the adj list
    for (const char in adj) { // for every single char in adj
      if (dfs(char)) { // and call dfs on each char. if it returns true...
        return ''; // then we've detected a loop so return ''
      }
    }
  
    return result;
  };