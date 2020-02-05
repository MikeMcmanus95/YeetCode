// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.currSize = 0;
    this.cache = {};
    this.list = new DoublyLinkedList();
  }

  insertKeyValuePair(key, value) {
    if (!(key in this.cache)) {
      const node = new Node(key, value);
      this.cache[key] = node;
      this.list.setHead(node);
      if (this.maxSize === this.currSize) {
        const nodeToRemove = this.list.tail.prev;
        this.list.removeNode(nodeToRemove);
        delete this.cache[nodeToRemove.key];
      } else {
        this.currSize++;
      }
    } else {
      const node = this.cache[key];
      node.value = value;
      this.list.removeNode(node);
      this.list.setHead(node);
    }
  }

  getValueFromKey(key) {
    if (!(key in this.cache)) return null;
    this.list.removeNode(this.cache[key]);
    this.list.setHead(this.cache[key]);
    return this.cache[key].value;
  }

  getMostRecentKey() {
    return this.list.head.next.key;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  setHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
  removeNode(node) {
    node.next.prev = node.prev;
    node.prev.next = node.next;
  }
}

class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}
