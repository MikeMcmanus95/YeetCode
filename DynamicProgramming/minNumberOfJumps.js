// 1 Dimensional DP Solution
// Time: O(n ^ 2) | Space: O(n)
function minNumberOfJumps(array) {
	const jumps = new Array(array.length).fill(Infinity);
	jumps[0] = 0;
	for (let i = 1; i < array.length; i++) {
		for (let j = 0; j < i; j++) {
			if (array[j] + j >= i) {
				jumps[i] = Math.min(jumps[i], jumps[j] + 1);
			}
		}
	}
	return jumps[jumps.length - 1];
}


// Iterative Genius Solution
// Time: O(n) | Space: O(1)

// MR = 13
// s = 3
// j = 2
//                                s
// [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]
function minNumberOfJumps(array) {
	let maxReach = array[0];
	let jumps = 0;
	let steps = array[0];
	for (let i = 1; i < array.length; i++) {
	  if (i === array.length - 1) return jumps + 1;
		maxReach = Math.max(maxReach, array[i] + i);
		steps--;
		if (steps === 0) {
			jumps++;
			steps = maxReach - i;
		}
	}
	return 0;
}
