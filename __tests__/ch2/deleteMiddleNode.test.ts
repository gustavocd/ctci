import deleteMiddleNode from '@/ch2/deleteMiddleNode';
import { LinkedNode } from '@/dataStructures/LinkedList'
import { arrayToLinkedList, linkedListToArray } from '@/helpers/linkedList';

test('should return false if node is not valid', function() {
  const invalidNode = new LinkedNode(1);
  expect(deleteMiddleNode(null)).toBeFalsy();
  expect(deleteMiddleNode(undefined)).toBeFalsy();
  expect(deleteMiddleNode(invalidNode)).toBeFalsy();
});

test('can delete multiple in long list', function() {
  let list = arrayToLinkedList([8, 6, 4, 2, 1]);
  deleteMiddleNode(list.head);
  deleteMiddleNode(list.head);
  deleteMiddleNode(list.head);
  deleteMiddleNode(list.head);
  expect(list.head.value).toEqual(1);
  expect(list.head.next).toBeNull();
});

[
  {
    list: [5, 8],
    node: 0,
    expected: [8]
  },
  {
    list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
    node: 8,
    expected: [5, 8, 3, 2, 7, 1, 4, 9, 30]
  },
  {
    list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
    node: 4,
    expected: [5, 8, 3, 2, 1, 4, 9, 15, 30]
  },
  {
    list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
    node: 1,
    expected: [5, 3, 2, 7, 1, 4, 9, 15, 30]
  },
  {
    list: [5, 8, 3, 2, 7, 1, 4, 9, 15, 30],
    node: 2,
    expected: [5, 8, 2, 7, 1, 4, 9, 15, 30]
  }
].forEach(context => {

  test(`removing node in index ${context.node} from list ${context.list} result ${context.expected}`, () => {
    let list = arrayToLinkedList(context.list);
    let node = list.head;
    for (let i = 0; i < context.node; ++i) {
      node = node.next;
    }
    deleteMiddleNode(node);
    expect(linkedListToArray(list)).toEqual(context.expected);
  });
});
