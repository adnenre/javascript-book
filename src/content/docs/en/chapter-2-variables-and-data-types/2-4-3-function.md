---
title: Function
sidebar:
  order: 3
  label: 2.4.3 Function
---

Functions are reusable blocks of code. In JavaScript, functions are first‑class objects – they can be assigned to variables, passed as arguments, and returned from other functions.

**Function declaration**:

```javascript
function add(a, b) {
  return a + b;
}
```

**Function expression:**

```javascript
const multiply = function (a, b) {
  return a * b;
};
```

**Arrow function (ES6):**

```javascript
const subtract = (a, b) => a - b;
```

**Calling functions:**

```javascript
let result = add(2, 3);
console.log(result); // 5
```

Functions have access to the arguments object (in non‑arrow functions) and can be invoked with new as constructors.

**arguments**

```javascript
function showArgs() {
  console.log(arguments[0]); // first argument
  console.log(arguments.length); // number of passed arguments
}
showArgs("hello", 42); // logs: 'hello', 2
```

**Constructor invocation with `new`**

```javascript
function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john.name); // 'John'
```

**Properties and methods:**

Properties `name` and `length`

```javascript
function greet(message) {}
console.log(greet.name); // "greet"
console.log(greet.length); // 1 (one parameter)
```

**`call()`, `apply()`, `bind()` – control `this`.**

- `call()`and `apply()`are for immediate invocation with a specific this.

- `bind()` is for creating a new function (with fixed this and optional preset arguments) that you can store and invoke later.

```javascript
const person = { name: "Alice", age: 30 };

// Function with parameters
function introduce(city, hobby) {
  console.log(`${this.name} is ${this.age} years old, lives in ${city} and loves ${hobby}.`);
}

// `call`: arguments passed individually
introduce.call(person, "Paris", "reading");
// Output: "Alice is 30 years old, lives in Paris and loves reading."

// `apply`: arguments passed as an array
introduce.apply(person, ["Lyon", "cycling"]);
// Output: "Alice is 30 years old, lives in Lyon and loves cycling."

// `bind`: creates a new function with `this` fixed and optionally pre-defined arguments
const introduceForAlice = introduce.bind(person);
introduceForAlice("swimming");
// Output: "Alice is 30 years old, lives in Marseille and loves swimming."
```

**Functions are reference**

Functions are referencetypes, so they are compared by reference.

```javascript
const fn1 = function () {};
const fn2 = function () {};
console.log(fn1 === fn2); // false (different references)

const fn3 = fn1;
console.log(fn1 === fn3); // true (same reference)
```
