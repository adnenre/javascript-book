---
title: Comment fonctionnent les fermetures ?
sidebar:
  order: 3
  label: 7.3  Comment fonctionnent les fermetures ?
---

Lorsqu’une fonction est définie, elle capture la chaîne de portée à ce moment‑là. La fermeture conserve des références aux variables externes, pas des copies. Cela signifie que les modifications apportées à ces variables sont reflétées dans la fermeture. Les moteurs JavaScript gèrent la mémoire en conservant ces variables tant qu’une fermeture y fait référence.

```javascript
function externe() {
  let valeur = 10;
  function interne() {
    console.log(valeur);
  }
  valeur = 20; // modifié après la définition de interne
  return interne;
}
const fn = externe();
fn(); // 20 (pas 10)
```
