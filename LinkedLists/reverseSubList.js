class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value} `);
      temp = temp.next;
    }
    console.log();
  }
}

function reverse_sub_list(head, p, q) {
  if (p === q) {
    return head;
  }

  let current = head;
  let previous = null;
  let i = 0;

  // Skip p - 1 nodes, and current will now point to the 'p'th node
  while (current !== null && i < p - 1) {
    previous = current;
    current = current.next;
    i++;
  }

  // We are interested in three parts of the LinkedList, the part before index 'p'
  // the part between 'p' and 'q' and the part after index 'q'
  const lastNodeOfFirstPart = previous;
  // After reversing the linked list, current will become the last node of the sub list
  const lastNodeOfSubList = current;

  let next = null;

  i = 0;
  // Reverse all nodes between p and q
  while (current !== null && i < q - p + 1) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }

  // Connect with first part
  if (lastNodeOfFirstPart !== null) {
    // Previous is now the first node of the sub-list
    lastNodeOfFirstPart.next = previous;
    // If lastNodeOfFirstPart is null, that means p === 1, and we are changing the head of the LinkedList
  } else {
    head = previous;
  }

  lastNodeOfSubList.next = current;
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

process.stdout.write('Nodes of original LinkedList are: ');
head.print_list();
result = reverse_sub_list(head, 2, 4);
process.stdout.write('Nodes of reversed LinkedList are: ');
result.print_list();
