---
title: String Object
sidebar:
  order: 3
  label: 13.3 String Object
---

The `String` object is a wrapper for string primitives. It provides methods for manipulating and inspecting text. Strings are immutable; methods return new strings.

### Key Points

- Properties: `length`.
- Methods: `charAt()`, `indexOf()`, `slice()`, `substring()`, `split()`, `replace()`, `toUpperCase()`, `trim()`, etc.
- Template literals (backticks) allow interpolation and multi‑line strings.

### Code Example

```javascript
const str = "Hello, World!";
console.log(str.length); // 13
console.log(str.charAt(0)); // "H"
console.log(str.indexOf("World")); // 7
console.log(str.slice(7, 12)); // "World"
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"

const name = "Alice";
const greeting = `Hello, ${name}!`; // template literal
console.log(greeting); // "Hello, Alice!"
```
