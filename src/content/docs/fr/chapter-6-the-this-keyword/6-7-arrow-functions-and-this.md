---
title: Fonctions fléchées et 'this'
sidebar:
  order: 7
  label: 6.7 Fonctions fléchées et 'this'
---

Les fonctions fléchées n'ont pas leur propre this. Elles héritent de this de la portée lexicale englobante (le contexte dans lequel elles sont définies). Cela les rend particulièrement utiles pour préserver le contexte dans les callbacks.

```javascript
const personne = {
  nom: "Alice",
  saluer: function () {
    setTimeout(() => {
      console.log(this.nom); // Alice (hérité du this de saluer)
    }, 100);
  },
};
personne.saluer();
```
