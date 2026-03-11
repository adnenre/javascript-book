---
title: get and set
sidebar:
  order: 5
  label: 10.6.5 get and set
---

Getter and setter functions allow computed or validated access to a property. They are defined with get and set in the descriptor.

```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
};
Object.defineProperty(person, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
});
console.log(person.fullName); // John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Jane
```
