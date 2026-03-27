---
title: Chaining Array Methods
sidebar:
  order: 6
  label: 15.6 Chaining Array Methods
---

Chaining array methods allows you to write declarative, readable data transformations. Since most array methods return a new array (or value), you can chain them sequentially. This is a core pattern in functional programming with arrays.

### Benefits

- Improved readability
- Declarative rather than imperative
- Easy to compose operations

### Common Chain Patterns

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
  .filter((n) => n % 2 === 0) // [2,4,6,8,10]
  .map((n) => n * 2) // [4,8,12,16,20]
  .reduce((sum, n) => sum + n, 0); // 60

console.log(result); // 60
```

### Chaining with `flatMap`

```javascript
const sentences = ["Hello world", "How are you"];
const words = sentences.flatMap((s) => s.split(" ")).map((word) => word.toLowerCase());
console.log(words); // ["hello", "world", "how", "are", "you"]
```

### Performance Considerations

- Each method creates a new array, which can be memory‑intensive for large datasets.
- For performance‑critical code, consider combining operations in a single loop.
- Modern engines optimize chains reasonably well.

### Example: Complex transformation

```javascript
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Mouse", price: 25, inStock: false },
  { name: "Keyboard", price: 75, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
];

const affordableInStock = products
  .filter((p) => p.inStock)
  .filter((p) => p.price < 500)
  .map((p) => p.name)
  .sort();
console.log(affordableInStock); // ["Keyboard", "Monitor"]
```
