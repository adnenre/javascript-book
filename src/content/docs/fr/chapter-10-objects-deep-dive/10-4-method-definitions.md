---
title: Method Definitions
sidebar:
  order: 4
  label: 10.4 Method Definitions
---

Dans les littéraux objets, les méthodes peuvent être définies avec une syntaxe plus courte, en omettant le mot‑clé function.

```javascript
const calculatrice = {
  valeur: 0,
  ajouter(n) {
    this.valeur += n;
    return this;
  },
  soustraire(n) {
    this.valeur -= n;
    return this;
  },
};
```
