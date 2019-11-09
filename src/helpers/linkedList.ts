import { LinkedList } from '@/dataStructures/LinkedList';

function linkedListToArray(list: LinkedList) {
  let arr = [],
    node = list.head;

  while (node !== null) {
    arr.push(node.value);
    node = node.next;
  }

  return arr;
}

function createNode(value, next = null) {
  return {
    value: value,
    next: next,
  };
}

function arrayToLinkedList(arr): LinkedList {
  if (arr.length === 0) {
    return null;
  }

  let list = new LinkedList();
  for (let i = arr.length - 1; i >= 0; --i) {
    list.insertFirst(arr[i])
  }

  return list;
}

function createLinkedList() {
  return {
    head: null,
    tail: null
  };
}

export { createLinkedList, arrayToLinkedList, createNode, linkedListToArray }
