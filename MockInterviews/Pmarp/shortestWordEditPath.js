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
function shortestWordEditPath(source, target, words) {
    const dict = {}; //pattern:[words]; ex. '*ut':[but, put]
    
    for (let word of words) {
      for (let i = 0; i < word.length; i++) {
        let pattern = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
        
        if (!dict[pattern]) {
          dict[pattern] = new Set();
        }
        
        dict[pattern].add(word);
      }
    }
    
    let step = 0;
    let queue = [source];
    
    while (queue.length) {
      const nextGen = [];
      
      for (const currWord of queue) {
        if (currWord === target) {
          return step;
        }
        
        for (let i = 0; i < currWord.length; i++) {
          const pattern = currWord.substring(0, i) + '*' + currWord.substring(i + 1, currWord.length);
          
          if (dict[pattern]) {
            for (const nei of dict[pattern]) {
              nextGen.push(nei);
            }
            delete dict[pattern];
          }
        }
      }
      
      queue = nextGen;
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


