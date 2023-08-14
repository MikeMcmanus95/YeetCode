/*
Leetcode 212
https://leetcode.com/problems/word-search-ii/description/
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:
Input: board = 
[["o","a","a","n"],
 ["e","t","a","e"],
 ["i","h","k","r"],
 ["i","f","l","v"]], 

words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
*/

function Trie() {
    this.children = {};
    this.word = null;
}

function findWords(board, words) {
    let result = [];
    let trie = new Trie();

    //create prefix tree of all the words given
    for (const word of words) {
        let curr = trie;
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
            if (!curr.children[char]) {
                curr.children[char] = new Trie();
            }
            curr = curr.children[char];
        }
        curr.word = word;
    }
    function dfs(x, y, curr) {
        if (x < 0 || y < 0 || x >= board.length || y >= board[x].length || board[x][y] === '#') return;

        //what you're looking at
        let char = board[x][y];
        //base case if it's not part of the children
        if (!curr.children[char]) return;
        //base case if the word is valid
            //push into result
            //mark word as null
        if (curr.children[char].word !== null) {
            result.push(curr.children[char].word)
            curr.children[char].word = null;
        }

        //mark as visited
        board[x][y] = '#';
        
        //move curr
        curr = curr.children[char];

        //dfs neighbors
        dfs(x+1, y, curr);
        dfs(x-1, y, curr);
        dfs(x, y+1, curr);
        dfs(x, y-1, curr);

        //unmark visit
        board[x][y] = char;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            dfs(i, j, trie);
        }
    }

    return result;
}