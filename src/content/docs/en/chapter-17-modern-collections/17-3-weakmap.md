---
title: WeakMap
sidebar:
  order: 12
  label: 17.3 WeakMap
---

`WeakMap` is a special kind of Map that holds "weak" references to its keys. This allows garbage collection to reclaim key objects when they are no longer referenced elsewhere, preventing memory leaks.

### What Makes WeakMap Different?

| Feature                | Map                                                                 | WeakMap                            |
| ---------------------- | ------------------------------------------------------------------- | ---------------------------------- |
| **Key types**          | Any value                                                           | Objects only (no primitives)       |
| **Reference strength** | Strong (prevents GC)                                                | Weak (doesn't prevent GC)          |
| **Iteration**          | Yes (keys, values, entries)                                         | No (not iterable)                  |
| **Size property**      | Yes (`.size`)                                                       | No (cannot know size)              |
| **Methods**            | `set`, `get`, `has`, `delete`, `clear`, `keys`, `values`, `entries` | `set`, `get`, `has`, `delete` only |
| **Garbage collection** | Keys remain in memory                                               | Keys can be collected              |

### Why Use WeakMap?

- **Memory management**: Prevents memory leaks when using objects as keys
- **Private data**: Store data associated with objects without interfering with their lifecycle
- **Caching**: Cache computed data without preventing object cleanup

### Key Points

- WeakMap keys must be objects (cannot be primitives).
- WeakMaps are not iterable (you cannot loop over them).
- There's no way to get a list of keys (keys are weakly held).
- If an object key has no other references, it can be garbage collected.
- When a key is collected, its entry is automatically removed from the WeakMap.

### Example Code

```javascript
// Basic WeakMap usage
const weakMap = new WeakMap();

// Keys must be objects
const obj1 = {};
const obj2 = {};

weakMap.set(obj1, "Value for obj1");
weakMap.set(obj2, "Value for obj2");

console.log(weakMap.get(obj1)); // 'Value for obj1'
console.log(weakMap.has(obj2)); // true

weakMap.delete(obj1);
console.log(weakMap.has(obj1)); // false

// Cannot use primitives as keys
// weakMap.set('string', 'value'); // TypeError: Invalid value used as weak map key
// weakMap.set(123, 'value');      // TypeError
// weakMap.set(null, 'value');     // TypeError

// WeakMap does NOT prevent garbage collection
let user = { name: "Alice" };
const userData = new WeakMap();
userData.set(user, { visits: 5, lastLogin: Date.now() });

console.log(userData.get(user)); // { visits: 5, lastLogin: ... }

// When user is no longer referenced, the entry is eligible for GC
user = null;
// The entry in userData will be cleaned up automatically

// WeakMaps are not iterable// console.log([...weakMap]); // TypeError: weakMap is not iterable
// console.log(weakMap.size); // undefined

// Practical: Private data storage
const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    // Store private data in WeakMap
    privateData.set(this, { name, age });
  }

  getName() {
    return privateData.get(this).name;
  }

  getAge() {
    return privateData.get(this).age;
  }

  setAge(age) {
    privateData.get(this).age = age;
  }
}

const alice = new Person("Alice", 30);
console.log(alice.getName()); // 'Alice'
console.log(alice.getAge()); // 30
alice.setAge(31);
console.log(alice.getAge()); // 31

// Cannot access private data directly
console.log(alice.name); // undefined
console.log(privateData.get(alice)); // { name: 'Alice', age: 31 } (but only if you have the WeakMap)

// When alice is garbage collected, her private data is also cleaned up
```
