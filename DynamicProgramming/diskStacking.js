/*
Input:
	An Array of disk arrays, ordered by width, depth and height
Output:
	An array of disks stacked to the highest possible height, where each subsequent disk is strictly
	smaller than the disk below it by all dimensions.

Approach:
	-Sort the input array of disks in ascending order by height
	-Create an array w same length as input array containing ints of the maximum height at that index
	-Loop over input array
		-For each disk, check if the disks before it have strictly smaller dimensions than the current disk
		-If dimensions are smaller:
			-Add prevDisks maximum height to the current disks height, if that result is greater than current
			disks maximum height, update current disks max height
			-Keep track of previous stacked disk by using maxHeight and maxHeightIdx variable in an array of indicies
	-Construct stack array by looping through the sequence array of indicies
	-Return reveresed stack array
*/

// Original Solution
// Time: O(n^2) | Space: O(n)
function diskStacking(disks) {
  disks.sort((a, b) => a[2] - b[2]);
	const heights = new Array(disks.length);
	const sequences = new Array(disks.length).fill(-1);
	const stackArray = [];
	let maxHeightIdx = 0;

	for (let i = 0; i < heights.length; i++) {
		heights[i] = disks[i][2];
	}

	for (let i = 0; i < disks.length; i++) {
		let currentDisk = disks[i];
		for (let j = 0; j <= i; j++) {
			let otherDisk = disks[j];
			let hasStrictlySmallerDimensions = otherDisk[0] < currentDisk[0] && otherDisk[1] < currentDisk[1] && otherDisk[2] < currentDisk[2];
			if (hasStrictlySmallerDimensions) {
				let newHeight = currentDisk[2] + heights[j];
				if (newHeight > heights[i]) {
					heights[i] = newHeight;
					sequences[i] = j;
				}
			}
			if (heights[i] > heights[maxHeightIdx]) {
				maxHeightIdx = i;
			}
		}
	}

	while(maxHeightIdx !== -1) {
		stackArray.push(disks[maxHeightIdx]);
		maxHeightIdx = sequences[maxHeightIdx];
	}

	return stackArray.reverse();
}
