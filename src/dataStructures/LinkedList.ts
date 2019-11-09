class LinkedNode {
  value: number;
  next: null | LinkedNode;

  constructor(value: number, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head: LinkedNode;

  constructor() {
    this.head = null;
  }

  insertFirst(value: number) {
    this.head = new LinkedNode(value, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(value: number) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new LinkedNode(value);
    } else {
      // The chain is empty!
      this.head = new LinkedNode(value);
    }
  }

  getAt(index: number) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index: number) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(value: number, index: number) {
    if (!this.head) {
      this.head = new LinkedNode(value);
      return;
    }

    if (index === 0) {
      this.head = new LinkedNode(value, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new LinkedNode(value, previous.next);
    previous.next = node;
  }

  forEach(fn: (node: LinkedNode, counter: number) => {}) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

export { LinkedList, LinkedNode }
