class BinarySearchTree<T> {
  value: T;
  left: BinarySearchTree<T>;
  right: BinarySearchTree<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: T): BinarySearchTree<T> {
    if (value < this.value) {
      // go left
      if (this.left === null) {
        this.left = new BinarySearchTree<T>(value);
        return;
      }
      this.left.insert(value);
    } else {
      // go right
      if (this.right ===  null) {
        this.right = new BinarySearchTree<T>(value);
        return;
      }
      this.right.insert(value);
    }
    return this;
  }

  getMinValue(): T {
    if (this.left === null) {
      return this.value;
    }
    return this.left.getMinValue();
  }
}

export default BinarySearchTree;
