---
title: Optimisation par récursion terminale
sidebar:
  order: 4
  label: 9.4 Optimisation par récursion terminale
---

L’optimisation par récursion terminale (TCO) permet à une fonction en position terminale (la dernière action avant le retour) de réutiliser la trame de pile actuelle, évitant ainsi la croissance de la pile. En mode strict, les moteurs JavaScript peuvent supporter la TCO, mais elle n’est pas garantie dans tous les environnements.

```javascript
function factorielleTerminale(n, acc = 1) {
  if (n <= 1) return acc;
  return factorielleTerminale(n - 1, n * acc); // appel terminal
}
console.log(factorielleTerminale(5)); // 120
```
