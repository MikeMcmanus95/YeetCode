/*
Leetcode URL: https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

We use the multilevel linked list from Example 1 above:

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
*/

const flatten = function (head, temp) {
  let node = head;
  while (node !== null) {
    if (node.child) {
      let temp = node.next || null;
      let child = node.child;
      node.next = child;
      child.prev = node;
      node.child = null;
      flatten(child, temp);
    }
    if (node.next) node = node.next;
    else break;
  }
  if (temp) {
    temp.prev = node;
    node.next = temp;
  }

  return head;
};
