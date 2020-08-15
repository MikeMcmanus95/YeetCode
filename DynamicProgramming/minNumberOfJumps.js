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
