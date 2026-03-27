---
title: Method Overriding
sidebar:
  order: 8
  label: 12.8 Method Overriding
---

Method overriding occurs when a child class provides a specific implementation of a method that already exists in the parent class. The child's method overrides the parent's. The `super` keyword can be used to call the parent's version.

### Key Points

- Overriding allows polymorphic behavior.
- You can choose to completely replace or extend the parent method.
- The signature (parameters) does not have to match exactly (but it usually does for clarity).

### Code Example

```javascript
class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  // Override area method
  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  // Override area method
  area() {
    return Math.PI * this.radius ** 2;
  }
}

const shapes = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach((s) => console.log(s.area())); // 20, 28.27...
```
