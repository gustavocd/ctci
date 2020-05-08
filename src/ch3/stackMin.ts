import Stack from '@/dataStructures/Stack';

type MinStacks<T> = {
  current: T;
  old: Stack<T>;
};

class StackMin<T> extends Stack<T> {
  private minStacks: MinStacks<T> = { current: null, old: null };
  private stack: Stack<T>;

  constructor() {
    super();
    this.stack = new Stack<T>();
    this.minStacks.current = null;
    this.minStacks.old = new Stack<T>();
  }

  push(item: T) {
    if (!this.minStacks.current) {
      this.minStacks.current = item;
      this.minStacks.old.push(item);
    }
    if (this.minStacks.current > item) {
      this.minStacks.old.push(item);
      this.minStacks.current = item;
    }
    this.stack.push(item);
  }

  pop(): T {
    if (this.minStacks.current === this.stack.peek()) {
      this.minStacks.old.pop();
      this.minStacks.current = this.minStacks.old.peek();
    }
    return this.stack.pop();
  }

  min(): T {
    return this.minStacks.current;
  }
}

export default StackMin;
