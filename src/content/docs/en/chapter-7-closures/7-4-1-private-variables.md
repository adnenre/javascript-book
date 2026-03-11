---
title: Private Variables
sidebar:
  order: 1
  label: 7.4.1 Private Variables
---

Closures enable data privacy by creating variables that cannot be accessed directly from outside. Only the returned functions can access and modify them.

```javascript
function createPerson(name) {
  let _name = name; // private
  return {
    getName() {
      return _name;
    },
    setName(newName) {
      _name = newName;
    },
  };
}
const person = createPerson("Alice");
console.log(person.getName()); // Alice
person.setName("Bob");
console.log(person.getName()); // Bob
```
