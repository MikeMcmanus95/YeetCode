// Taken from CS Dojo Udemy Course

function most_frequent(array) {
  const freqCounter = {};
  let max = [0, 0];
  for (let num of array) {
    freqCounter[num] ? freqCounter[num]++ : freqCounter[num] = 1;
    if (freqCounter[num] > max[1]) {
      max[0] = num;
      max[1] = freqCounter[num];
    }
  }
  return max[0];
}





function testMostFrequent(array, mostFreq) {
  let result = most_frequent(array);
  if (result === mostFreq) return true;
  else {
    console.log('Woops! Something went wrong: ', result);
    return false;
  }
}

console.log(testMostFrequent([1, 3, 1, 3, 2, 1], 1));
console.log(testMostFrequent([1, 3, 4, 1, 3, 4, 2, 1, 4, 4, 4], 4));
console.log(testMostFrequent([1, 3, 3, 3, 2, 1], 3));
