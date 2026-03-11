---
title: String (methods, template literals ...)
sidebar:
  order: 2
  label: 2.3.2 String (methods, template literals ...)
---

Strings represent textual data. They can be created with single quotes, double quotes, or backticks (template literals).

```javascript
let single = "Hello";
let double = "World";
let template = `Hello, ${double}!`; // interpolation
```

Common methods:

length – property, not a method.

toUpperCase(), toLowerCase() – change case.

indexOf(), includes(), startsWith(), endsWith() – search.

slice(), substring() – extract parts.

replace(), replaceAll() – replace text.

split() – convert to array.

trim() – remove whitespace from ends.

```javascript
let str = "  JavaScript is fun!  ";
console.log(str.trim()); // "JavaScript is fun!"
console.log(str.includes("fun")); // true
console.log(str.slice(2, 12)); // "JavaScript"
console.log("a,b,c".split(",")); // ['a', 'b', 'c']
```

Template literals also allow multi‑line strings.

```javascript
let multi = `This is
a multi‑line
string.`;
```

> Strings are immutable – methods return new strings, they don't modify the original.
