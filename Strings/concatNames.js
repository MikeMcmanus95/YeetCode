let names = ['Alice', 'Bob', 'Carol', 'Diana'];
// Alice, Bob, Carol, and Diana

function concatNames(names) {
  let resultStr = '';
  if (names.length === 1) return names[names.length - 1];
  for (let i = 0; i < names.length; i++) {
    if (i !== names.length - 1) {
      resultStr += names[i] + ', ';
    } else {
      resultStr += 'and ' + names[i];
    }

  }

  return resultStr;
}


let names2 = ['Alice', 'Bob', 'Carol', 'Diana'];
// let limit = 4;
// Alice, Bob, and 2 more
function concatNames2(names, limit) {
  let resultStr = '';

  for (let i = 0; i < limit - 1; i++) {
    resultStr += names[i] + ', ';
  }

  // Alice, Bob,
  let remaining = names.length - limit;
  if (remaining) {
    resultStr += `${names[limit - 1]} and ${remaining} more`;
  } else {
    resultStr += `and ${names[limit - 1]}`;
  }

  return resultStr;

}

let names3 = ['Alice', 'Bob', 'Carol', 'Diana'];
let maxChars = 24
// Alice, Bob, Carol, and Diana == 28 characters
// Alice, Bob, and Carol == 21 characters
// Alice, Bob, Carol, and 1 more

// max_chars = 20
// Alice, Bob, and Carol == 21 characters
// Alice, Bob, and 2 more


// Alice and 3 more <= max_chars



function concatNames3(names, maxChars) {
  let resultStr = '';
  let limit = 1;


  while (resultStr.length < maxChars) {
    resultStr = concatNames(names.slice(0, limit));
    //Alice 5 1
    //Alice, and Bob 14 2
    //Alice, Bob, and Carol 21 3
    //Alice, Bob, Carol, and Diana 28
    limit++;
  }

  resultStr = concatNames2(names, limit - 1);

  return resultStr;
}









//Alice, Bob, Carol,
// console.log(concatNames(names)); // Alice, Bob, Carol, and Diana
// console.log(concatNames2(names2, 4)); // Alice, Bob, and 2 more
console.log(concatNames3(names2, 12));
