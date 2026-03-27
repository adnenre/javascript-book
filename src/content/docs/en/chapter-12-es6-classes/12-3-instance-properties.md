---
title: Instance Properties
sidebar:
  order: 3
  label: 12.3 Instance Properties
---

Instance properties are properties that belong to each individual object created from a class. They are typically defined inside the `constructor` method, but can also be defined directly in the class body (public instance fields) as of ES2022.

### Key Points

- Instance properties hold data specific to each instance.
- Can be initialized in the constructor or directly in the class body.
- Public fields are a newer syntax for defining instance properties outside the constructor.

### Code Example

```javascript
class Product {
  // Public instance field (ES2022)
  category = "general";

  constructor(name, price) {
    this.name = name; // instance property
    this.price = price; // instance property
  }

  display() {
    console.log(`${this.name} (${this.category}): ${this.price}`);
  }
}

const phone = new Product("Phone", 699);
phone.display(); // "Phone (general): 699"
```
