---
title: call()
sidebar:
  order: 1
  label: 6.8.1 call()
---

call() invokes the function with a given this value and arguments provided individually.

```javascript
function greet(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`);
}
const person = { name: "Alice" };
greet.call(person, "Paris", "France"); // Alice lives in Paris, France
```
