---
title: constructor Property
sidebar:
  order: 6
  label: 11.6 constructor Property
---

Every object’s prototype has a `constructor` property that references the function used to create that object. It is useful for checking the origin of an instance or creating new instances of the same type.

### Code Example

```javascript
function User(name) {
  this.name = name;
}
const user = new User("Alice");
console.log(user.constructor === User); // true
console.log(user.constructor.name); // "User"

// Create another user using constructor
const another = new user.constructor("Bob");
console.log(another.name); // "Bob"
```
