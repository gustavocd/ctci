class Queue<T> {
  private data: T[];

  constructor(data: T[] = []) {
    this.data = data;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }

  enqueue(item: T) {
    this.data.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return;
    }
    return this.data.shift();
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[0];
  }
}

export default Queue;
