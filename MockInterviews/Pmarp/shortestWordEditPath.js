/*
Given two words source and target, and a list of words words, find the length of the shortest series 
of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word 
(and the final target word) must exist in words.

If the task is impossible, return -1.

Examples:
source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1
*/

//BFS Approach
function shortestWordEditPath(beginWord, endWord, wordList) {
    const dict = {};
    wordList.push(beginWord)
    for (let word of wordList) {
        for (let i = 0; i < word.length; i++) {
            let pattern = word.substring(0, i) + '*' + word.substring(i + 1, word.length)
            if (!dict[pattern]) dict[pattern] = new Set()
            dict[pattern].add(word)
        }
    }

    let step = 0;
    let q = [beginWord];
    while (q.length) {
        let next = [];
        for (let w of q) {
            if (w === endWord) return step;
            for (let i = 0; i < w.length; i++) {
                /// search all the patterns
                const pattern = w.substring(0, i) + '*' + w.substring(i + 1, w.length)
                if (dict[pattern]) {
                    for (const nei of dict[pattern]) {
                        next.push(nei)
                    }
                    delete dict[pattern]

                }
            }
        }
        q = next;
        step++;
    }

    return -1;
}

//Niave Approach
function shortestWordEditPath(source, target, words, steps=0) {
	/**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/

	// your code goes here
	if (source === target) return steps;
    let shortest = Infinity;

	for (let i = 0; i < words.length; i++){
		let differences = 0;
		for (let j =0; j< target.length; j++){
            if (source[j] !== words[i][j]) differences++;
		}
		if (differences === 1) {
			let newWords = words.slice();
			let newSource = newWords.splice(i,1)[0]
			let result = shortestWordEditPath(newSource,target,newWords,steps+1)
			if (result !== -1) {
                shortest = Math.min(shortest, result)
			}
		}
	}
	if (shortest === Infinity) return -1;
  
	return shortest;
}


