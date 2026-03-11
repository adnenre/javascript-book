---
title: Object
sidebar:
  order: 1
  label: 2.4.1 Object
---

Objects are collections of key‑value pairs. Keys are strings (or symbols), values can be any type.

**Creating objects**:

```javascript
// Object literal
let person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

// Using new Object()
let car = new Object();
car.brand = "Tesla";
```

Accessing properties:

Dot notation: `person.name`

Bracket notation: person['name'] (useful for dynamic keys)

Adding/modifying properties:

```javascript
person.city = "Paris";
person["age"] = 31;
```

Deleting properties:

```javascript
delete person.age;
```

Methods are functions stored as properties.

```javascript
person.greet(); // "Hi, I'm Alice"
Objects are mutable and passed by reference.
```
