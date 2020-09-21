// AlgoExpert URL: https://www.algoexpert.io/questions/Product%20Sum

// Time: O(n) | Space: O(d)
function productSum(array, depth = 1) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			sum += productSum(array[i], depth + 1) * depth;
		} else {
			sum += array[i] * depth;
		}
	}
	return sum;
}
