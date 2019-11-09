import { LinkedList } from '@/dataStructures/LinkedList';

function kthToLast(list: LinkedList, n: number) {
  if (n >= list.size()) {
    return null;
  }
  let slow = list.head;
  let fast = list.head;
  while(n > 0 && fast.next) {
    fast = fast.next;
    n-=1;
  }
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow.value;
}

export default kthToLast;
