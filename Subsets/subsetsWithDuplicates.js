const find_subsets = function (nums) { // [1, 3, 3]
  const subsets = [[]];
  nums.sort((a, b) => a - b);
  let startPoint = 0;


  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    let length = subsets.length;

    for (let j = startPoint; j < length; j++) {
      const subset = subsets[j].slice();
      subset.push(number);
      subsets.push(subset);
    }
    if (number === nums[i + 1]) {
      startPoint = length;
    } else {
      startPoint = 0;
    }
  }

  return subsets;
};


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});
