---
title: Object.create()
sidebar:
  order: 1
  label: 10.7.1 Object.create()
---

Object.create() crée un nouvel objet avec le prototype spécifié et des propriétés optionnelles.

```javascript
const proto = {
  saluer() {
    return "Bonjour";
  },
};
const obj = Object.create(proto);
console.log(obj.saluer()); // Bonjour
```
