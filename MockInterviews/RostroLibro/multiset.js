/*
Create something that allows you to add and remove items and keep track of how many of the items there are
*/
class MultiSet {
    constructor() {
      this.map = new Map();
    }
  
    // add "i" to set
    add(i) {
      if (this.map.has(i)) {
        // x++
        this.map.set(i, this.map.get(i) + 1);
      } else {
        this.map.set(i, 1);
      }
    }
  
    // remove "i" from set
    remove(i) {
      if (!this.map.has(i)) return;
      if (this.map.get(i) === 1) {
        this.map.delete(i);
      } else {
        this.map.set(i, this.map.get(i) - 1);
      }
    }
  
    // return how many times i is in the set
    countOf(i) {
      if (!this.map.has(i)) return;
      return this.map.get(i);
    }
  }
  
  const m = new MultiSet();
  m.add(4);
  m.add(4);
  console.log("How many 4s? " + m.countOf(4));
  // should print 2