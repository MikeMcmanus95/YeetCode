/**
message = "Hello World!";
r1 = 3
c1 = 4


H e l l
o   W o
r l d !

Output -----> "Hore llWdlo!"

message = "Hello World!";
r2 = 6
c2 = 2

H e
l l
o
W o
r l
d !

Output -----> "HloWrdel  ol!"

message = "Hello World!";
r2 = 2
c2 = 6

H e l l o
W o r l d !

Output -----> "HWeolrllod !"


message = "I have a Dream";
r4 = 7
c4 = 2

I
h a
v e
  a
  D
r e
a m

Output -----> "Ihv   raaeaDem"

Approach:
  -Create a grid with the dimensions r1 c1, initialize to null
  -Loop over the grid to add letters of the world to each row
  -Loop over the grid column first then row, construct the new string
  -Return new string

r= 3 c= 4

"Hello World!"
i    j
H e l l
o   W o
r l d !

Time & Space:
O(n) | O(n)
 */

const message = "Hello World!";
const r1 = 3;
const c1 = 4;


const r2 = 6;
const c2 = 2;
const r3 = 2;
const c3 = 6;


const message2 = "I have a Dream";
const r4 = 7
const c4 = 2

const encyrpt = (message, row, col) => {
  let finalStr = "";

  for (let i = 0; i < col; i++) {
    for (let j = i; j < message.length; j += col) {
      finalStr += message[j];
    }
  }

  return finalStr
}

console.log(encyrpt(message, r1, c1));
console.log(encyrpt(message, r1, c1) === "Hore llWdlo!")

console.log(encyrpt(message, r2, c2));
console.log(encyrpt(message, r2, c2) === "HloWrdel ol!")
console.log(encyrpt(message, r3, c3));
console.log(encyrpt(message, r3, c3) === "HWeolrllod !")
console.log(encyrpt(message2, r4, c4));
console.log(encyrpt(message2, r4, c4) === "Ihv  ra aeaDem")
