---
title: Generator Functions
sidebar:
  order: 5
  label: 5.5 Generator Functions
---

Generator functions (defined with function\*) can be paused and resumed using the yield keyword. They return a Generator object that can be iterated over. They are useful for lazy evaluation and custom iterators.

```javascript
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```
