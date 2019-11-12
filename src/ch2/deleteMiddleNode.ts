import { LinkedNode } from '@/dataStructures/LinkedList';

function deleteMiddleNode(node:LinkedNode): boolean {
  if (!node || node.next === null) {
    return false;
  }
  const next = node.next;
  node.value = next.value;
  node.next = next.next;
  return true;
}

export default deleteMiddleNode;
