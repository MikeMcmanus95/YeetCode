// AlgoExpert URL: https://www.algoexpert.io/questions/Longest%20Peak

// SOLUTION 1 (Helper functions):
// Time: O(n) | Space O(n)
function longestPeak(array) {
  let locationsOfPeaks = findAllPeaks(array);
  let maxPeakLength = findLongestPeak(array, locationsOfPeaks);
  return maxPeakLength;
}

const findAllPeaks = (array) => {
  let locationsOfPeaks = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      locationsOfPeaks.push(i);
    }
  }
  return locationsOfPeaks;
}

const findLongestPeak = (array, peakLocations) => {
  let maxPeakLength = 0;
  let currentPeak = 0;
  for (let i = 0; i < peakLocations.length; i++) {
    let center = peakLocations[i];
    let left = center - 1;
    let right = center + 1;
    currentPeak = 3;
    while (array[left] > array[left - 1] || array[right] > array[right + 1]) {
      if (array[left] > array[left - 1]) {
        currentPeak++;
        left--;
      }
      if (array[right] > array[right + 1]) {
        currentPeak++;
        right++;
      }
    }
    if (currentPeak > maxPeakLength) maxPeakLength = currentPeak;
  }
  return maxPeakLength;
}


// SOLUTION 2 (Single function):
// Time: O(n) | Space: O(1)
function longestPeak(array) {
  let maxPeakLength = 0, currentPeak = 0, left = 0, right = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      left = i - 1;
      right = i + 1;
      currentPeak = 3;
      while (array[left] > array[left - 1] || array[right] > array[right + 1]) {
        if (array[left] > array[left - 1]) {
          currentPeak++;
          left--;
        }
        if (array[right] > array[right + 1]) {
          currentPeak++;
          right++;
        }
      }
      if (currentPeak > maxPeakLength) maxPeakLength = currentPeak;
    }
  }
  return maxPeakLength;
}
