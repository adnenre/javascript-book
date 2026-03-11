---
title: Variables var, let, and const
sidebar:
  order: 1
  label: 2.1 Variables var, let, and const
---

In JavaScript, variables are used to store data values. There are three ways to declare a variable: `var`, `let`, and `const`.

**`var`** – Old way (pre‑ES6). Function‑scoped, can be redeclared, and is hoisted.

```javascript
var name = "Alice";
var name = "Bob"; // redeclaration allowed
console.log(name); // Bob
```

**`let`** – Introduced in ES6. Block‑scoped, cannot be redeclared in the same scope, but can be updated.

```javascript
let age = 25;
age = 26; // allowed

// let age = 30; // Error: Identifier 'age' has already been declared
```

**`const`** – Also ES6. Block‑scoped, cannot be updated or redeclared. Must be initialized at declaration.

```javascript
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable
// const GRAVITY; // Error: Missing initializer in const declaration
```

For objects and arrays declared with **`const`**, the reference cannot change, but properties/elements can be modified.

```javascript
const person = { name: "Alice" };
person.name = "Bob"; // allowed
// person = { name: 'Charlie' }; // Error
```

> Best practice: Use const by default, let when you need to reassign, and avoid var in modern code.
