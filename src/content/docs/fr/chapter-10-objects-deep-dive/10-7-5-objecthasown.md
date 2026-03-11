---
title: Object.hasOwn()
sidebar:
  order: 5
  label: 10.7.5 Object.hasOwn()
---

Object.hasOwn() retourne true si la propriété spécifiée est une propriété directe de l’objet, non héritée. C’est une alternative plus sûre à hasOwnProperty().

```javascript
const obj = { a: 1 };
console.log(Object.hasOwn(obj, "a")); // true
console.log(Object.hasOwn(obj, "toString")); // false
```
