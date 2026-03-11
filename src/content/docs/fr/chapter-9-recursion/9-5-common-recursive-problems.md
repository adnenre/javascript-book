---
title: Problèmes récursifs courants
sidebar:
  order: 5
  label: 9.5 Problèmes récursifs courants
---

```javascript
function factorielle(n) {
  if (n <= 1) return 1;
  return n * factorielle(n - 1);
}
console.log(factorielle(5)); //
```
