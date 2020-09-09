/*
You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

Example:
words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

n = number of words in `words`
m = maximal string length of each word

*/

const isCheating = (words, string) => {
  let dictionary = new Map();

  for(let i = 0; i < string.length; i++) {
    let letter = string[i];
    if(dictionary.has(letter)) {
      let [count, reset] = dictionary.get(letter);
      count++;
      dictionary.set(letter, [count, count]);
    }
    else {
      dictionary.set(letter, [1, 1])
    }
  }


  for(let i = 0; i < words.length; i++) {
    debugger;
    let word = words[i];
    let temp  = ""
    for(let j = 0; j < word.length; j++) {
      let letter = word[j];

      console.log("letter", letter)
      if(!dictionary.has(letter)) {
        break;
      }

      let [count, reset] = dictionary.get(letter);
      console.log(dictionary.get(letter))
      if(!count) {
        count = reset
        dictionary.set(letter, [count, reset])
        break;
      }
      else {
        temp += letter
        count--
        dictionary.set(letter, [count, reset])
      }
     console.log('temp', temp)
      if(temp === word) return word;
    }
  }

  return false;
}

const words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby'];
const string1 = 'tcabnihjs';
const string2 = 'tbcanihjs';
const string3 = 'baykkjl';
const string4 = 'bbabylkkj';



// console.log(isCheating(words, string1)) // cat
// console.log(isCheating(words, string2)) // cat
// console.log(isCheating(words, string3)) // none
console.log(isCheating(words, string4)) // baby
