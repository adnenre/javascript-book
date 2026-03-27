---
title: __proto__ vs prototype
sidebar:
  order: 3
  label: 11.3 __proto__ vs prototype
---

- **`__proto__`** : An internal property (getter/setter) available on every object that points to its prototype. It is deprecated in favor of `Object.getPrototypeOf()` / `Object.setPrototypeOf()` but still widely used.
- **`prototype`** : A property that exists only on **constructor functions**. It defines the prototype of objects created by that constructor when using `new`.

### Code Example

```javascript
function Animal() {}
Animal.prototype.sound = "grrr";

const dog = new Animal();
console.log(dog.__proto__ === Animal.prototype); // true
console.log(dog.prototype); // undefined (dog is not a constructor)
```
