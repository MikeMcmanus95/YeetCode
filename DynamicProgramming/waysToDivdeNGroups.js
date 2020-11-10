function calculate(pos, prev, left, k) {
  debugger;
  // Base Case
  if (pos == k) {
    if (left == 0) return 1;
    else return 0;
  }

  // If N is divides completely
  // into less than k groups
  if (left == 0) return 0;

  let answer = 0;

  // Put all possible values
  // greater equal to prev
  for (let i = prev; i <= left; i++) {
    answer += calculate(pos + 1, i, left - i, k);
  }
  return answer;
}

function countWaysToDivide(n, k) {
  return calculate(0, 1, n, k);
}

console.log(countWaysToDivide(8, 4));
