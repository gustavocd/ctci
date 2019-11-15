class Stack<T> {
  private data: T[];

  constructor(data: T[] = []) {
    this.data = data;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return;
    }
    return this.data.pop();
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.data.length - 1];
  }

  push(item: T) {
    this.data.push(item);
  }
}

export default Stack;
