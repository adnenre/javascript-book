---
title: Closure Performance Considerations
sidebar:
  order: 5
  label: 7.5 Closure Performance Considerations
---

Closures have a memory cost because the outer variables they reference remain alive as long as the closure itself is alive. This can lead to memory leaks if closures are inadvertently kept (e.g., in long‑lived event listeners). Modern JavaScript engines optimise closures, but it's still wise to avoid unnecessary closures and to clean up references when possible.

```javascript
// Potential memory leak: event listener keeps closure referencing large data
function setupHeavy() {
  const largeArray = new Array(1000000).fill("data");
  window.addEventListener("resize", () => {
    console.log(largeArray.length); // closure keeps largeArray alive
  });
}
// Better: remove listener when no longer needed, or avoid referencing large data
```
