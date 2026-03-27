---
title: Parasitic Inheritance
sidebar:
  order: 4
  label: 11.8.4 Parasitic Inheritance
---

**Parasitic inheritance** is a pattern where a function creates an object that inherits from another object, then enhances it with additional properties or methods. It is similar to the prototype pattern but uses a factory function.

### Code Example

```javascript
function createAnother(original) {
  const clone = Object.create(original); // inherit
  clone.sayHi = function () {
    // enhance
    console.log("Hi!");
  };
  return clone;
}

const person = { name: "John", friends: ["Alice", "Bob"] };
const anotherPerson = createAnother(person);
anotherPerson.sayHi(); // "Hi!"
console.log(anotherPerson.name); // "John"
```
