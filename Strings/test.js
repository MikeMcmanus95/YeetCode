/*
Your students are getting craftier and hiding words in 2D grids of letters. The word may start anywhere in the grid, and consecutive letters can be either immediately below or immediately to the right of the previous letter.

Given a grid and a word, write a function that returns the location of the word in the grid as a list of coordinates. If there are multiple matches, return any one.

grid1 = [
	['c', 'c', 'c', 'a', 'r', 's'],
	['c', 'c', 'i', 't', 'n', 'b'],
	['a', 'c', 'n', 'n', 't', 'i'],
	['t', 'c', 'i', 'i', 'p', 't']
]

word1_1 = "catnip"
find_word_location(grid1, word1_1)-> [ (0, 2), (0, 3), (1, 3), (2, 3), (3, 3), (3, 4) ]

word1_2 = "cccc"
find_word_location(grid1, word1_2)-> [(0, 1), (1, 1), (2, 1), (3, 1)]
OR [(0, 0), (1, 0), (1, 1), (2, 1)]
OR [(0, 0), (0, 1), (1, 1), (2, 1)]
OR [(1, 0), (1, 1), (2, 1), (3, 1)]


grid2 = [
    ['c', 'p', 'a', 'n', 't', 's'],
    ['a', 'b', 'i', 't', 'a', 'b'],
    ['t', 'f', 'n', 'n', 'c', 'i'],
    ['x', 's', 'c', 'a', 't', 'n'],
    ['x', 's', 'd', 'd', 'e', 'a'],
    ['s', 'q', 'w', 'x', 's', 'p']
]


word2 = "catnap"
find_word_location(grid2, word2)-> [ (3, 2), (3, 3), (3, 4), (3, 5), (4, 5), (5, 5) ]

grid3 = [
    ['c', 'r', 'c', 'a', 'r', 's'],
    ['a', 'b', 'i', 't', 'n', 'i'],
    ['t', 'f', 'n', 'n', 'x', 'p'],
    ['x', 's', 'i', 'x', 'p', 't']]
word3 = "catnip"
find_word_location(grid3, word3)-> [ (0, 2), (0, 3), (1, 3), (1, 4), (1, 5), (2, 5) ]

n = number of rows
m = number of columns
w = length of the word



*/


const grid1 = [
	["c", "c", "c", "a", "r", "s"],
	["c", "c", "i", "t", "n", "b"],
	["a", "c", "n", "n", "t", "i"],
	["t", "c", "i", "i", "p", "t"]
];
const word1_1 = "catnip";
const word1_2 = "cccc";

const grid2 = [
    ["c", "p", "a", "n", "t", "s"],
    ["a", "b", "i", "t", "a", "b"],
    ["t", "f", "n", "n", "c", "i"],
    ["x", "s", "c", "a", "t", "n"],
    ["x", "s", "d", "d", "e", "a"],
    ["s", "q", "w", "x", "s", "p"]
];
const word2 = "catnap";

const grid3 = [
    ["c","r","c","a","r","s"],
    ["a","b","i","t","n","i"],
    ["t","f","n","n","x","p"],
    ["x","s","i","x","p","t"]
];
const word3 = "catnip";



function find_word_location(grid, word) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === word[0]) {
        const coordsArray = traverseGrid(grid, row, col, word, [])
        if (coordsArray.length === word.length) return coordsArray;
      }
    }
  }

  return false;
}


function traverseGrid(grid, row, col, word, coordsArray) {
  let queue = [[row, col]]

  while (queue.length) {
    let [row, col] = queue.shift();
    if (!grid[row] || !grid[row][col]) continue;
    if (grid[row][col] === word[0]) {
      coordsArray.push([row, col]);
      word = word.substr(1);
      queue.push([row + 1, col]);
      queue.push([row, col + 1]);
    }
  }

  return coordsArray;
}



console.log(find_word_location(grid1, word1_1)); // [ (0, 2), (0, 3), (1, 3), (2, 3), (3, 3), (3, 4) ]
console.log(find_word_location(grid1, word1_2)); // [(0, 1), (1, 1), (2, 1), (3, 1)]




// Time: O(n + m) | Space: O(s)
function isCheating(words, message) {
  const messageMap = new Map();

  for (let char of message) {
    if (messageMap.has(char)) {
      messageMap.set(char, messageMap.get(char) + 1);
    } else {
      messageMap.set(char, 1);
    }
  }

  for (let word of words) {
    if (checkWord(word, new Map(messageMap))) return word;
  }

  return false;
}

function checkWord(word, messageMap) {
  for (let char of word) {
      if (messageMap.get(char) === 0) return false;
      if (messageMap.has(char)) {
        messageMap.set(char, messageMap.get(char) - 1);
      } else {
        return false;
      }
    }
  return true;
}



// const words = ["cat", "dog", "bird", "car", "ax", "baby"];
// const string1 = "tcabnihjs";
// const string2 = "tbcanihjs";
// const string3 = "baykkjl";
// const string4 = "bbabylkkj";

// console.log(isCheating(words, string1)) // cat
// console.log(isCheating(words, string2)) // cat
// console.log(isCheating(words, string3)) // false
// console.log(isCheating(words, string4)) // baby
