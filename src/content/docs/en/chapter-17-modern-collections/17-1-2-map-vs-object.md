---
title: Map vs Object
sidebar:
  order: 3
  label: 17.1.2 Map vs Object
---

While both Maps and Objects store key-value pairs, they have significant differences that make each suitable for different scenarios.

### Comparison Table

| Feature                | Map                                     | Object                                        |
| ---------------------- | --------------------------------------- | --------------------------------------------- |
| **Key types**          | Any (objects, functions, primitives)    | Strings and Symbols                           |
| **Key order**          | Insertion order                         | Not guaranteed (except integer keys)          |
| **Size**               | `map.size`                              | Manually computed with `Object.keys().length` |
| **Iteration**          | Directly iterable                       | Need `Object.keys/values/entries`             |
| **Performance**        | Better for frequent additions/deletions | Better for JSON operations                    |
| **Default keys**       | None                                    | Inherited from prototype                      |
| **JSON serialization** | Not direct (need custom)                | Native support                                |
| **Use case**           | Dynamic key-value storage               | Structured data, DTOs                         |

### When to Use Map

- Keys are unknown until runtime
- Keys are objects or non-string types
- Frequent additions and deletions
- Need to preserve insertion order
- Working with large collections

### When to Use Object

- Static structure (known keys)
- JSON serialization needed
- Working with APIs that expect objects
- Simple data transfer objects (DTOs)
- Using object methods (prototype chain)

### Key Points

- Object keys are always coerced to strings.
- Map keys retain their original type.
- Maps have built-in iteration methods.
- Objects have prototype chain (can cause collisions).
- Use `Object.create(null)` for "pure" dictionary objects.

### Example Code

```javascript
// Key type differences

// Object coerces keys to strings
const obj = {};
obj[42] = "numeric key";
obj[true] = "boolean key";
obj[{}] = "object key";

console.log(Object.keys(obj)); // ['42', 'true', '[object Object]']
console.log(obj["42"]); // 'numeric key'
console.log(obj["true"]); // 'boolean key'

// Map preserves key types
const map = new Map();
map.set(42, "numeric key");
map.set(true, "boolean key");
map.set({}, "object key");
map.set({}, "another object"); // Different object = different key

console.log(map.get(42)); // 'numeric key'
console.log(map.get(true)); // 'boolean key'
console.log(map.size); // 4 (each object is unique)

// Size property
const objSize = { a: 1, b: 2, c: 3 };
console.log(Object.keys(objSize).length); // 3 (manual calculation)

const mapSize = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(mapSize.size); // 3 (direct access)

// Iteration differences
const dataObj = { a: 1, b: 2, c: 3 };

// Object requires helper methods
for (const key of Object.keys(dataObj)) {
  console.log(key, dataObj[key]);
}

for (const [key, value] of Object.entries(dataObj)) {
  console.log(key, value);
}

// Map is directly iterable
const dataMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const [key, value] of dataMap) {
  console.log(key, value);
}

// Performance comparison (conceptual)
// Map is optimized for many additions/deletions
const perfMap = new Map();
for (let i = 0; i < 100000; i++) {
  perfMap.set(i, i);
}

// Object can be slower with frequent changes
const perfObj = {};
for (let i = 0; i < 100000; i++) {
  perfObj[i] = i;
}

// Prototype inheritance issue
const pollutedObj = {};
pollutedObj.toString = "overridden";
console.log(pollutedObj.toString); // 'overridden' (hasOwnProperty conflict)

const safeMap = new Map();
safeMap.set("toString", "overridden");
console.log(safeMap.get("toString")); // 'overridden' (no conflict)

// Creating object without prototype
const pureDict = Object.create(null);
pureDict["toString"] = "safe";
console.log(pureDict.toString); // 'safe' (no prototype)

// JSON serialization
const mapData = new Map([
  ["name", "Alice"],
  ["age", 30],
]);
// JSON.stringify(mapData) -> '{}' (doesn't work by default)

// Manual conversion needed
const mapToObj = Object.fromEntries(mapData);
console.log(JSON.stringify(mapToObj)); // '{"name":"Alice","age":30}'

// Object works natively
const objData = { name: "Alice", age: 30 };
console.log(JSON.stringify(objData)); // '{"name":"Alice","age":30}'

// Converting between Map and Object
const fromObject = new Map(Object.entries({ a: 1, b: 2, c: 3 }));
console.log(fromObject.get("b")); // 2

const fromMap = Object.fromEntries(
  new Map([
    ["x", 10],
    ["y", 20],
  ]),
);
console.log(fromMap); // { x: 10, y: 20 }

// Use case: Map for dynamic keys
const dynamicMap = new Map();
const userSessions = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

userSessions.forEach((user) => {
  // Can use objects directly as keys
  dynamicMap.set(user, { loginTime: Date.now() });
});

console.log(dynamicMap.get(userSessions[0])); // { loginTime: ... }

// Object cannot do this easily
const dynamicObj = {};
userSessions.forEach((user) => {
  // Would need to use stringified ID
  dynamicObj[user.id] = { loginTime: Date.now() };
});
```
