---
title: Déclarations de fonction
sidebar:
  order: 1
  label: 5.1 Déclarations de fonction
---

Une déclaration de fonction définit une fonction nommée qui est remontée (hoisted) au sommet de sa portée, ce qui signifie qu'elle peut être appelée avant sa définition. Elle se compose du mot‑clé `function`, d'un nom, de paramètres et d'un corps de fonction.

```javascript
function addition(a, b) {
  return a + b;
}
console.log(addition(2, 3)); // 5
```
