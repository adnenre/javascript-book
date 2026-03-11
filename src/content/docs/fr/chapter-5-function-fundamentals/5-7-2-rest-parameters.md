---
title: Paramètres du reste
sidebar:
  order: 2
  label: 5.7.2 Paramètres du reste
---

Les paramètres du reste (...args) rassemblent tous les arguments restants dans un tableau. Ils doivent être le dernier paramètre.

```javascript
function somme(...nombres) {
  return nombres.reduce((acc, n) => acc + n, 0);
}
console.log(somme(1, 2, 3, 4)); // 10
```
