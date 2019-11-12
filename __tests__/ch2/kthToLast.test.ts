import kthToLast from '@/ch2/kthToLast'
import { arrayToLinkedList } from '@/helpers/linkedList';

test('should return null if list is shorter than n', () => {
  expect(kthToLast(arrayToLinkedList([1]), 1)).toBeNull();
  expect(kthToLast(arrayToLinkedList([1, 2, 3]), 3)).toBeNull();
  expect(kthToLast(arrayToLinkedList([1, 2, 3]), 4)).toBeNull();
});

[
  {
    list: [5],
    n: 0
  },
  {
    list: [8, 5, 1],
    n: 0
  },
  {
    list: [8, 5, 1],
    n: 1
  },
  {
    list: [8, 5, 1],
    n: 2
  },
  {
    list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
    n: 8
  },
  {
    list: [8, 8, 9, 9, 9, 6, 6, 4, 4, 6, 6, 4, 4, 6, 9, 4, 8, 2, 3, 1],
    n: 16
  }
].forEach(context => {
  let expected = context.list[context.list.length - 1 - context.n]
  test(`should return ${expected} in ${context.n}th to last element in ${context.list}`, () => {
    let list = arrayToLinkedList(context.list);
    expect(kthToLast(list, context.n)).toEqual(expected);
  });
});
