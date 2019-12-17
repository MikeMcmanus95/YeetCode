// Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(false);
    return;
  }
  let freqCount = {};
  let counter = 0;
  for (let i = 0; i < arr1.length; i++) {
    let element = arr1[i];
    if (!freqCount[element]) {
      freqCount[element] = 1;
    } else {
      freqCount[element]++;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    let element = arr2[j];
    if (freqCount[Math.sqrt(element)]) {
      counter++;
    }
  }

  if (counter === arr1.length) {
    console.log(true);
    return;
  }

  console.log(false);
}

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false
