---
title: Creating Objects with Custom Prototypes
sidebar:
  order: 7
  label: 11.7 Creating Objects with Custom Prototypes
---

You can create objects with a specific prototype using:

- `Object.create(proto)`
- Constructor functions with `new`
- `Object.setPrototypeOf()`

This allows you to define shared behavior explicitly.

### Code Example

```javascript
const methods = {
  speak() {
    console.log(`I say: ${this.message}`);
  },
};

const obj = Object.create(methods);
obj.message = "Hello";
obj.speak(); // "I say: Hello"

// With a constructor
function Speaker(message) {
  this.message = message;
}
Speaker.prototype = methods;
const speaker = new Speaker("Bonjour");
speaker.speak(); // "I say: Bonjour"
```
