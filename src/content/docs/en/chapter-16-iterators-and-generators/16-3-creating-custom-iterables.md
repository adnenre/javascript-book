---
title: Creating Custom Iterables
sidebar:
  order: 3
  label: 16.3 Creating Custom Iterables
---

Beyond built-in iterables, you can make any object iterable by implementing the iterable protocol. This is powerful for creating domain-specific collections with custom iteration logic.

### When to Create Custom Iterables

- **Domain-specific data structures**: Trees, graphs, linked lists
- **Lazy sequences**: Compute values on demand
- **Data transformations**: Apply filters/maps during iteration
- **Virtual collections**: Represent infinite or computed sequences

### Implementing the Iterable Protocol

A custom iterable needs:

1. A `[Symbol.iterator]()` method
2. That method returns an iterator object
3. The iterator has a `next()` method
4. `next()` returns `{ value, done }`

### Common Patterns

| Pattern               | Description               | Use Case                |
| --------------------- | ------------------------- | ----------------------- |
| **Finite sequence**   | Ends after N values       | Lists, ranges           |
| **Infinite sequence** | Never ends                | Mathematical sequences  |
| **Circular sequence** | Repeats after completion  | Cycling through options |
| **Filtered view**     | Only shows matching items | Data subsets            |

### Key Points

- Custom iterables work with all iteration syntaxes (`for...of`, spread, destructuring).
- You can implement both finite and infinite iterables.
- The iterator state must be stored somewhere (usually in the iterator object).
- Multiple independent iterators from the same iterable should not interfere.

### Example Code

```javascript
// Custom iterable: Binary Tree traversal (in-order)
class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  *[Symbol.iterator]() {
    // In-order traversal using recursion with generator
    if (this.left) yield* this.left;
    yield this.value;
    if (this.right) yield* this.right;
  }
}

const tree = new BinaryTree(5, new BinaryTree(3, new BinaryTree(1), new BinaryTree(4)), new BinaryTree(8, new BinaryTree(6), new BinaryTree(9)));

console.log([...tree]); // [1, 3, 4, 5, 6, 8, 9]

// Custom iterable: Fibonacci sequence (finite)
class Fibonacci {
  constructor(count) {
    this.count = count;
  }

  [Symbol.iterator]() {
    let a = 0,
      b = 1;
    let index = 0;
    const max = this.count;

    return {
      next() {
        if (index >= max) {
          return { done: true };
        }

        let current;
        if (index === 0) current = a;
        else if (index === 1) current = b;
        else {
          current = a + b;
          a = b;
          b = current;
        }

        index++;
        return { value: current, done: false };
      },
    };
  }
}

const fib = new Fibonacci(7);
console.log([...fib]); // [0, 1, 1, 2, 3, 5, 8]

// Custom iterable with pagination (virtual data)
class PaginatedData {
  constructor(totalItems, pageSize = 10) {
    this.totalItems = totalItems;
    this.pageSize = pageSize;
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    const total = this.totalItems;
    const size = this.pageSize;

    return {
      next() {
        if (currentIndex >= total) {
          return { done: true };
        }

        const start = currentIndex;
        const end = Math.min(currentIndex + size, total);
        const page = Array.from({ length: end - start }, (_, i) => start + i + 1);

        currentIndex = end;
        return { value: page, done: false };
      },
    };
  }
}

const paginated = new PaginatedData(25, 10);
for (const page of paginated) {
  console.log(`Page: ${page}`);
}
// Page: [1,2,3,4,5,6,7,8,9,10]
// Page: [11,12,13,14,15,16,17,18,19,20]
// Page: [21,22,23,24,25]
```
