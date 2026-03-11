---
title: Fonctions fléchées
sidebar:
  order: 3
  label: 5.3 Fonctions fléchées
---

Les fonctions fléchées offrent une syntaxe concise pour écrire des fonctions. Elles n'ont pas leur propre liaison this, arguments ou super, et ne peuvent pas être utilisées comme constructeurs. Elles sont idéales pour les fonctions qui ne sont pas des méthodes.

```javascript
const soustraction = (a, b) => a - b;
console.log(soustraction(10, 7)); // 3
```
