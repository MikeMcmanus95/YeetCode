// AlgoExpert URL: https://www.algoexpert.io/questions/Boggle%20Board
// Time: O(nm * 8^s + ws) | Space: O(nm + ws)
function boggleBoard(board, words) {
  const trie = new Trie();
	for (const word of words) {
		trie.add(word);
	}
	const finalWords = new Set();
  const visited = new Array(board.length).fill().map(() => new Array(board[0].length).fill(false));
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[row].length; col++) {
			explore(row, col, board, trie.root, visited, finalWords);
		}
	}

	return Array.from(finalWords);
}

function explore(i, j, board, trieNode, visited, finalWords) {
	if (visited[i][j]) return;
	const letter = board[i][j];
	if (!trieNode.has(letter)) return;
	visited[i][j] = true;
	trieNode = trieNode.get(letter);
	if (trieNode.has('*')) {
		finalWords.add(trieNode.get('*'));
	}
	const neighbors = getNeighbors(i, j, board);
	for (const neighbor of neighbors) {
		explore(neighbor[0], neighbor[1], board, trieNode, visited, finalWords);
	}
	visited[i][j] = false;
}

// Extra method to get all valid neighbors within the bounds of the grid
// Ask interviewer if you need to code this function out
function getNeighbors(i, j, board) {
	const neighbors = [];
	if (i > 0 && j > 0) {
		neighbors.push([i - 1, j - 1]);
	}
	if (i > 0 && j < board[0].length - 1) {
		neighbors.push([i - 1, j + 1]);
	}
	if (i < board.length - 1 && j < board[0].length - 1) {
		neighbors.push([i + 1, j + 1]);
	}
	if (i < board.length - 1 && j > 0) {
		neighbors.push([i + 1, j - 1]);
	}
	if (i > 0) {
		neighbors.push([i - 1, j]);
	}
	if (i < board.length - 1) {
		neighbors.push([i + 1, j]);
	}
	if (j > 0) {
		neighbors.push([i, j - 1]);
	}
	if (j < board[0].length) {
		neighbors.push([i, j + 1]);
	}
	return neighbors;
}

class Trie {
	constructor() {
		this.root = new Map();
		this.endSymbol = '*';
	}

	add(word) {
		let current = this.root;
		for (const letter of word) {
			if (!current.has(letter)) {
				current.set(letter, new Map());
			}
			current = current.get(letter);
		}
		current.set(this.endSymbol, word);
	}
}

let board = [
  ["t", "h", "i", "s", "i", "s", "a"],
  ["s", "i", "m", "p", "l", "e", "x"],
  ["b", "x", "x", "x", "x", "e", "b"],
  ["x", "o", "g", "g", "l", "x", "o"],
  ["x", "x", "x", "D", "T", "r", "a"],
  ["R", "E", "P", "E", "A", "d", "x"],
  ["x", "x", "x", "x", "x", "x", "x"],
  ["N", "O", "T", "R", "E", "-", "P"],
  ["x", "x", "D", "E", "T", "A", "E"]
];

let words = [
  "this",
  "is",
  "not",
  "a",
  "simple",
  "boggle",
  "board",
  "test",
  "REPEATED",
  "NOTRE-PEATED"
]

console.log(boggleBoard(board, words));
