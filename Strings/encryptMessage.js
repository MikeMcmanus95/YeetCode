///////////////////
/*
65
MAP                                              90
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
0               8
{A: 0.... Z:25}

// SET
T h e g i r l w a n s o b z c v d f j u k m y p q x
{T, h, e}
[...set]

const key = "The girl wants a goblins, zebras, caves, dogs, fish, jesus, kings, monkeys, percs, queen, xmen";
const message = "It was all a Dream!"

Output ---> "au yTj Too T gfiTb!"

Time & Space: O(k + m) | O(1)

 */

const key = "The girl wants a goblins, zebras, caves, dogs, fish, jesus , kings , monkeys, percs, queen, xmen";
const message3 = "It was all a Dream!";


const encyrptedMessage = (message, key) => {
  const keySet = new Set();
  const alphabetMap = new Map();
  const startIdx = 65;
  let count = 26;
  let resultStr = "";

  for (let i = 0; i < 26; i++) {
    alphabetMap.set(String.fromCharCode(startIdx + i), i)
  }

  for (let char of key) {
    let uppercaseChar = char.toUpperCase();
    if (alphabetMap.has(uppercaseChar)) {
      if (!keySet.has(uppercaseChar)) keySet.add(char);
    }
  }

  const keyArray = [...keySet];
  for (let char of message) {
    if (alphabetMap.has(char.toUpperCase())) {
      let alphabetIdx = alphabetMap.get(char.toUpperCase());
      resultStr += keyArray[alphabetIdx];
    } else {
      resultStr += char;
    }
  }

  return resultStr;
}

console.log(encyrptedMessage(message3, key));
console.log(encyrptedMessage(message3, key) === "au yTj Too T gfiTb!");
