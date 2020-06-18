const cyclic_sort = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === i + 1) {
      i++
    } else {
      swap(i, nums[i] - 1, nums);
    }
  }
  return nums;
}

const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(`${cyclic_sort([3, 1, 5, 4, 2])}`)
console.log(`${cyclic_sort([2, 6, 4, 3, 1, 5])}`)
console.log(`${cyclic_sort([1, 5, 6, 4, 3, 2])}`)
