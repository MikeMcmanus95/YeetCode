// AlgoExpert URL: https://www.algoexpert.io/questions/Remove%20Kth%20Node%20From%20End

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// SOLUTION 1:
// Time O(n) | Space O(1)
function removeKthNodeFromEnd(head, k) {
  let length = 1;
  let position = 0;
  let previous;
  let current = head;
  while (current.next) {
    current = current.next;
    length++;
  }
  current = head;
  while (current) {
    position++;
    if (previous && position === length - k + 1) {
      previous.next = current.next;
    } else if (!previous && length - k + 1 === 1) {
      current = current.next;
      head.value = current.value;
      head.next = current.next;
    }
    previous = current;
    current = current.next;
  }
}

// SOLUTION 2: (AlgoExpert)
// Time O(n) | Space O(1)

function removeKthNodeFromEnd(head, k) {
  let first = head;
  let second = head;
  let counter = 1;
  while (counter <= k) {
    second = second.next;
    counter++;
  }
  if (second === null) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }
  while (second.next !== null) {
    second = second.next;
    first = first.next;
  }
  first.next = first.next.next;
}
