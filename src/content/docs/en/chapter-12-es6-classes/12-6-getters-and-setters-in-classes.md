---
title: Getters and Setters in Classes
sidebar:
  order: 6
  label: 12.6 Getters and Setters in Classes
---

Getters and setters allow you to define methods that are accessed like properties. They provide a way to encapsulate internal logic while maintaining a simple property interface.

### Key Points

- Defined with `get` and `set` keywords.
- Useful for validation, computed properties, or lazy initialization.
- Can be used with private fields to control access.

### Code Example

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) throw new Error("Radius must be positive");
    this._radius = value;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const c = new Circle(5);
console.log(c.radius); // 5
c.radius = 10;
console.log(c.area); // 314.159...
c.radius = -1; // Error: Radius must be positive
```
