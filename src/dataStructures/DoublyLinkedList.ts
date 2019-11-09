class LinkedNode {
  next: null | LinkedNode;
  prev: null | LinkedNode;
  value: number;

  constructor(next = null, prev = null, value: number) {
    this.next = next;
    this.prev = prev;
    this.value = value;
  }
}

class DoublyLinkedList {
  head: null | LinkedNode;
  tail: null | LinkedNode;

  constructor(head = null, tail = null) {
    this.head = head;
    this.tail = tail;
  }

  setHead(node: LinkedNode) {
    if (!this.head) {
      this.head = node;
    }
  }

  setTail(node: LinkedNode) {
    if (!this.tail) {
      this.tail = node;
    }
  }

  insertBefore(node: LinkedNode, nodeToInsert: LinkedNode) {

  }

  insertAfter(node: LinkedNode, nodeToInsert: LinkedNode) {
  }

  insertAtPosition(position: number, nodeToInsert: LinkedNode) {

  }

  removeNodesWithValue(value: number) {

  }

  remove(node: LinkedNode) {

  }

  containsNodeWithValue(value: number): LinkedNode | null {
    let current = this.head;
    while (current.next) {
      current = current.next;
      if (current.value === value) {
        return current;
      }
    }
    return null;
  }
}

export { DoublyLinkedList, LinkedNode }
