---
title: Optional Chaining
sidebar:
  order: 9
  label: 3.9 Optional Chaining
---

The optional chaining operator (?.) allows reading a property deep within a chain of objects without having to explicitly check each reference. If any reference is null or undefined, the expression short‑circuits and returns undefined.

```javascript
let user = {
  name: "John",
  address: {
    city: "Paris",
  },
};

console.log(user?.name); // "John"
console.log(user?.address?.city); // "Paris"
console.log(user?.contact?.phone); // undefined (no error)

// With function calls
let obj = {
  greet: function () {
    return "Hello";
  },
};
console.log(obj.greet?.()); // "Hello"
console.log(obj.bye?.()); // undefined
```
