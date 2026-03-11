---
title: Generator Functions
sidebar:
  order: 5
  label: 5.5 Fonctions génératrices
---

Les fonctions génératrices (définies avec function\*) peuvent être suspendues et reprises grâce au mot‑clé yield. Elles retournent un objet Générateur que l'on peut parcourir. Elles sont utiles pour l'évaluation paresseuse et les itérateurs personnalisés.

```javascript
function* generateurId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = generateurId();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
```
