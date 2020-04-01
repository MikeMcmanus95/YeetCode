const a = [1, 4, 6, 8, 8];
const b = [5, 8, 8, 10, 10];

const answer = [8, 8];

function intersection(arr1, arr2) {
  let freqCounter = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    freqCounter[arr1[i]] ? freqCounter[arr1[i]]++ : (freqCounter[arr1[i]] = 1);
  }
  for (let i = 0; i < arr2.length; i++) {
    freqCounter[arr2[i]] ? freqCounter[arr2[i]]++ : (freqCounter[arr2[i]] = 1);
  }
  console.log(freqCounter);
  for (let key in freqCounter) {
    if (freqCounter[key] >= 2) {
      let length = Math.floor(freqCounter[key] / 2);
      let newArr = Array(length).fill(key);
      result.push(...newArr);
    }
  }

  return result;
}

console.log(intersection(a, b));
