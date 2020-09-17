const thirdMax = (nums) => {
  let maximums = new Set();

  for(let num of nums) {
    maximums.add(num);
    if(maximums.size > 3) {
      maximums.delete(Math.min(...maximums))
    }

  }

  if(maximums.size === 3) return Math.min(...maximums);
    return Math.max(...maximums)
}
