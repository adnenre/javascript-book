---
title: The constructor Method
sidebar:
  order: 2
  label: 12.2 The constructor Method
---

Static methods and properties are defined on the class itself, not on instances. They are called using the class name. Static members are useful for utility functions, constants, or singleton-like behavior.

### Key Points

- Declared with the `static` keyword.
- Cannot be called on instances; only on the class.
- Can be inherited by subclasses.
- Static fields (ES2022) allow defining static properties directly.

### Code Example

```javascript
class MathUtils {
  static PI = 3.14159; // static field
  static add(a, b) {
    // static method
    return a + b;
  }
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(5, 3)); // 8

const utils = new MathUtils();
// utils.add(2,3); // TypeError: utils.add is not a function
```
