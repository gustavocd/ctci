import { LinkedNode } from '@/dataStructures/LinkedList';

function removeDups(head: LinkedNode) {
  if (!head) {
    return null;
  }
  let current = head;
  let prev = null;
  const repeatedNodes = new Map();
  while(current) {
    if (repeatedNodes.has(current.value)) {
      prev.next = current.next;
    } else {
      repeatedNodes.set(current.value, current.value);
      prev = current;
    }
    current = current.next;
  }
  return head;
}

export default removeDups;
