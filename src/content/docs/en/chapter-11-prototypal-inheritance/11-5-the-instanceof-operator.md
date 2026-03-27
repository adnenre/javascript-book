---
title: The instanceof Operator
sidebar:
  order: 5
  label: 11.5 The instanceof Operator
---

The `instanceof` operator tests whether the `prototype` property of a constructor appears anywhere in the prototype chain of an object. It returns a boolean.

### Code Example

```javascript
function Car(make) {
  this.make = make;
}
const tesla = new Car("Tesla");
console.log(tesla instanceof Car); // true
console.log(tesla instanceof Object); // true
console.log(tesla instanceof Array); // false
```
