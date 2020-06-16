class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = function (head) {
  let cycleLength = findCycle(head);
  let pointer1 = head;
  let pointer2 = head;
  for (let i = 1; i < cycleLength; i++) {
    pointer2 = pointer2.next;
  }

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
};

const findCycle = (head) => {
  let fast = head.next;
  let slow = head;
  while (fast.next !== null) {
    if (fast === slow) {
      return getCycleLength(slow);
    }
    fast = fast.next.next;
    slow = slow.next;
  }
}

const getCycleLength = (slow) => {
  let current = slow;
  let length = 1;
  while (true) {
    current = current.next;
    length++;
    if (current === slow) break;
  }
  return length;
}


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head.next.next.next
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)

head.next.next.next.next.next.next = head
console.log(`LinkedList cycle start: ${find_cycle_start(head).value}`)


