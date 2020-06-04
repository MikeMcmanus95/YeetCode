// Simple Hash Table implementation.
// Borrwing from https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/      8344850#overview

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
}

console.log(hash("pink", 13));
console.log(hash("green", 13));
console.log(hash("cyan", 13));
