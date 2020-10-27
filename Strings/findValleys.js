/*
https://medium.com/@codingwithmanny/how-to-solve-the-counting-valleys-challenge-f7c6cac95d25
Valley: below sea level (0) __
Given: string of Up or Down "steps"
U - Up
D - down

ex: 1

N = 8
S = "UDDDUDUU"
height = 0
valleyCount = 1
_/\      _
   \    /
    \/\/
Result: 1 Valley

ex: 2

N = 10
S = "UDDDUDUUDU"
isInValley = false
height = 0
valleyCount = 1
_/\      _  _
   \    / \/
    \/\/
Result: 2 Valleys


*/

function findValleys(steps) {
  let height = 0, valleyCount = 0;
  let isValley = false;

  for (let step of steps) {
    if (step === 'U') height++;
    else if (step === 'D') height--;

    if (height === 0 && isValley) {
      isValley = false;
      valleyCount++;
    } else if (height < 0){
      isValley = true;
    }
  }
  return valleyCount;
}

console.log(findValleys("UDDDUDUU"))// 1
console.log(findValleys("UDDDUDUUDU"))// 2
