/* 
Leetcode 146
https://leetcode.com/problems/lru-cache/

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4


Implementation: Use a doubly linked list, with an empty head and tail property, as
  well as an object for the cache. Each key in the cache will point to a node on the linked list
  that contains the value. When a key in interacted with or added, it becomes the head of the list.
  When the maximum size is too large, we also remove the tail (oldest) element when we add new ones.
*/

class Node {
    constructor(key = null, val = null) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.map = new Map();
        this.least = new Node(-1, -1);
        this.most = new Node(-1, -1);
        this.least.next = this.most;
        this.most.prev = this.least;
    }
    
    //inserting on the right side by using next = this.most
    insert(curr) {
        let next = this.most;
        let prev = this.most.prev;
        
        curr.next = next;
        curr.prev = prev;
        
        prev.next = curr;
        next.prev = curr;
    }
    
    
    //removing from the left
    remove(curr) {
        let prev = curr.prev;
        let next = curr.next;
        
        prev.next = next;
        next.prev = prev;
    }
    
    //if we have the key already stored in the map, we want to remove and insert it so that it becomes the most recently used item as well
    get(key) {
        if (this.map.has(key)) {
            this.remove(this.map.get(key));
            this.insert(this.map.get(key));
            return this.map.get(key).val;
        }
        return - 1;
    }
    
    //if we already have the key, we want to remove it before we insert something
    //we also check capacity here
    put(key, val) { //return void
        if (this.map.has(key)) {
            this.remove(this.map.get(key))
        }
        
        let curr = new Node(key, val);
        this.map.set(key, curr);
        this.insert(curr);
        
        if (this.map.size > this.cap) {
            let itemToRemove = this.least.next;
            this.remove(itemToRemove);
            this.map.delete(itemToRemove.key);
        }
    }
}

// class LRUCache {
//   constructor(maxSize) {
//     this.maxSize = maxSize || 1;
//     this.currSize = 0;
//     this.cache = {};
//     this.list = new DoublyLinkedList();
//   }

//   insertKeyValuePair(key, value) {
//     if (!(key in this.cache)) {
//       const node = new Node(key, value);
//       this.cache[key] = node;
//       this.list.setHead(node);
//       if (this.maxSize === this.currSize) {
//         const nodeToRemove = this.list.tail.prev;
//         this.list.removeNode(nodeToRemove);
//         delete this.cache[nodeToRemove.key];
//       } else {
//         this.currSize++;
//       }
//     } else {
//       const node = this.cache[key];
//       node.value = value;
//       this.list.removeNode(node);
//       this.list.setHead(node);
//     }
//   }

//   getValueFromKey(key) {
//     if (!(key in this.cache)) return null;
//     this.list.removeNode(this.cache[key]);
//     this.list.setHead(this.cache[key]);
//     return this.cache[key].value;
//   }

//   getMostRecentKey() {
//     return this.list.head.next.key;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = new Node(0, 0);
//     this.tail = new Node(0, 0);
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
//   }
//   setHead(node) {
//     node.next = this.head.next;
//     node.prev = this.head;
//     this.head.next.prev = node;
//     this.head.next = node;
//   }
//   removeNode(node) {
//     node.next.prev = node.prev;
//     node.prev.next = node.next;
//   }
// }

// class Node {
//   constructor(key, value) {
//     this.value = value;
//     this.key = key;
//     this.next = null;
//     this.prev = null;
//   }
// }
