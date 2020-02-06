// Place value = (num / 10^place) / 10
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

console.log(getDigit(12345, 0));

// log10 = 10 to what power gives us our num?
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(124563462));

// find the number with the most digits, return digit count
function mostDigits(array) {
  let max = 0;
  array.forEach(ele => (max = Math.max(digitCount(ele), max)));
  return max;
}

console.log(mostDigits([1, 22, 3, 4, 44, 55]));

function radixSort(array) {
  const maxDigits = mostDigits(array);

  for (let i = 0; i < maxDigits; i++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < array.length; j++) {
      let digit = getDigit(array[j], i);
      bucket[digit].push(array[j]);
    }
    // reassigning to empty array, using concat to append every element in buckets,
    // using spread to flatten
    array = [].concat(...bucket);
  }
  return array;
}

let bigArray = [22, 43, 642, 12, 124, 98, 4514, 4, 2218, 23, 445, 827, 7];
let smallArray = [42, 472, 231, 5, 23, 235];
console.log(radixSort(bigArray));
