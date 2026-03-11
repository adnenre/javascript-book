---
title: Async Functions
sidebar:
  order: 6
  label: 5.6 Async Functions
---

Async functions (declared with async) allow writing asynchronous code using await to pause execution until a Promise settles. They always return a Promise, making them ideal for handling asynchronous operations.

```javascript

async function fetchData() {
  const response = await fetch("https://api.example.com");
  const data = await response.json();
  return data;
}

/
```
