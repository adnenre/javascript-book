---
title: JSON Object (parse, stringify)
sidebar:
  order: 9
  label: 13.9 JSON Object (parse, stringify)
---

The `JSON` object provides methods to parse JSON strings and convert JavaScript values to JSON. `JSON.parse()` converts a JSON string into a JavaScript object, and `JSON.stringify()` converts a JavaScript value into a JSON string.

### Key Points

- `JSON.stringify(value, replacer, space)` – optional replacer function or array, and space for indentation.
- `JSON.parse(text, reviver)` – optional reviver function to transform the result.
- JSON supports objects, arrays, strings, numbers, booleans, and null.
- Functions, undefined, and symbols are omitted or replaced with `null`.

### Code Example

```javascript
const obj = {
  name: "Alice",
  age: 30,
  skills: ["JavaScript", "Python"],
  isActive: true,
};

// Convert to JSON string
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);
/*
{
  "name": "Alice",
  "age": 30,
  "skills": ["JavaScript", "Python"],
  "isActive": true
}
*/

// Parse back to object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "Alice"

// Using replacer to filter
const filtered = JSON.stringify(obj, ["name", "skills"]);
console.log(filtered); // {"name":"Alice","skills":["JavaScript","Python"]}

// Using reviver
const parsedWithReviver = JSON.parse('{"a":1,"b":2}', (key, value) => {
  if (key === "a") return value * 2;
  return value;
});
console.log(parsedWithReviver); // { a: 2, b: 2 }
```
