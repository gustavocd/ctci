import removeDups from '@/ch2/removeDups';
import { LinkedNode } from '@/dataStructures/LinkedList'
import { arrayToLinkedList, linkedListToArray } from '@/helpers/linkedList';

test.each([
  null,
  undefined,
])(
  'should return input if falsy .removeDups(%s)',
  (head: LinkedNode) => {
    expect(removeDups(head)).toBeFalsy();
  }
);

[
  {
    list: [5],
    expected: [5]
  },
  {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    list: [5, 5, 5, 5, 5],
    expected: [5]
  },
  {
    list: [2, 4, 5, 4, 5, 4, 6, 7, 6, 8],
    expected: [2, 4, 5, 6, 7, 8]
  },
  {
    list: [8, 6, 8, 6],
    expected: [8, 6]
  },
  {
    list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
    expected: [8, 9, 6, 4, 2, 3, 1]
  }
].forEach(context => {
    test(`should return list ${context.list} correctly updated to ${context.expected}`,
    () => {
      let list = arrayToLinkedList(context.list);
      removeDups(list.head);
      expect(linkedListToArray(list)).toEqual(context.expected);
    },
  );
});
