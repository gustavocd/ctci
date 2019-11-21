import StackMin from '@/ch3/stackMin';

let stack = null;

describe('StackMin tests', () => {
  beforeEach(() => {
    stack = new StackMin<number>();
  });

  test('min is null when stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.min()).toBeNull;
  });

  test('can push values in ascending order and min stays the same', function() {
    let values = [2, 4, 6, 8, 10, 12];

    values.forEach(v => {
      stack.push(v);
      expect(stack.min()).toEqual(2);
    });

    values.reverse().forEach(v => {
      expect(stack.min()).toEqual(2);
      expect(stack.pop()).toEqual(v);
    });

    expect(stack.min()).toBeNull;
  });

  test('can push values in descending order and min is updated', function() {
    let values = [12, 10, 8, 6, 4, 2];

    values.forEach(v => {
      stack.push(v);
      expect(stack.min()).toEqual(v);
    });

    values.reverse().forEach(v => {
      expect(stack.min()).toEqual(v);
      expect(stack.pop()).toEqual(v);
    });

    expect(stack.min()).toBeNull;
  });
});
