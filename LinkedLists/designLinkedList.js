/*
Leetcode 707
https://leetcode.com/problems/design-linked-list/description/

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    
    get(index) {
        if (index < 0 || index >= this.length) {
            return -1;
        }
        
        if (index === 0) {
            return this.head.val;
        }
        
        let curr = this.head;
        
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        
        return curr.val;
    }
    
    addAtHead(val) {
        this.addAtIndex(0, val);
    }
    
    addAtTail(val) {
        this.addAtIndex(this.length, val);
    }
    
    addAtIndex(index, val) {
        if (index < 0 || index > this.length) {
            return;
        }
        let newNode = new Node(val);
        
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let curr = this.head;
            
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            
            newNode.next = curr.next;
            curr.next = newNode;
        }
        this.length++;
    }
    
    deleteAtIndex(index, val) {
        if (index < 0 || index >= this.length) {
            return;
        }
        
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        
        this.length--;
    }
}