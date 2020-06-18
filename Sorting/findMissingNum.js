const find_missing_number = function (nums) {
  cyclicSort(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) return i;
  }
  return -1;
};

const cyclicSort = (array) => {
  let i = 0;
  while (i < array.length) {
    let j = array[i];
    if (array[i] < array.length && array[i] !== array[j]) {
      [array[i], array[j]] = [array[j], array[i]];
    } else {
      i++;
    }
  }
}


console.log(find_missing_number([4, 0, 3, 1]));
