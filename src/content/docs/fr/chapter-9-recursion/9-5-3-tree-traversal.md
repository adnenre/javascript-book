---
title: Parcours d’arbre
sidebar:
  order: 3
  label: 9.5.3 Parcours d’arbre
---

```javascript
const arbre = {
  valeur: 1,
  enfants: [
    { valeur: 2, enfants: [] },
    { valeur: 3, enfants: [{ valeur: 4, enfants: [] }] },
  ],
};
function parcourir(noeud) {
  console.log(noeud.valeur);
  noeud.enfants.forEach((enfant) => parcourir(enfant));
}
parcourir(arbre); // 1,2,3,4
```
