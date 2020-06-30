function same(arr1, arr2) {
  // Short circuit
  if (arr1.length !== arr2.length) {
    console.log(false);
    return;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    // if freqCounter1 has val in it, we set it to whatever freqCounter1[val] is equal to, plus 1
    // if not, we set freqCounter1[val] to 0
    // just an easier way to write this rather than doing if statements
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    // Here we check if the key exists in freqCounter2
    if (!(key ** 2 in freqCounter2)) {
      console.log(false);
      return;
    }
    // Now we check if the values match, if there are two 2's in arr1, there should be
    // two 4's in arr2
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
  return;
}
