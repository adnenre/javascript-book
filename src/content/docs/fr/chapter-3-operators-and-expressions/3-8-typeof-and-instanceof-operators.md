---
title: Opérateurs typeof et instanceof
sidebar:
  order: 8
  label: 3.8 Opérateurs typeof et instanceof
---

**typeof**
typeof retourne une chaîne indiquant le type d'un opérande non évalué (par exemple, "number", "string", "object").

```javascript
console.log(typeof 42); // "number"
console.log(typeof "bonjour"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug historique)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
```

**instanceof**
instanceof vérifie si un objet possède un prototype spécifié dans sa chaîne de prototypes.

```javascript
let tableau = [];
let dateObj = new Date();
console.log(tableau instanceof Array); // true
console.log(tableau instanceof Object); // true
console.log(dateObj instanceof Date); // true
console.log(dateObj instanceof Object); // true
```
