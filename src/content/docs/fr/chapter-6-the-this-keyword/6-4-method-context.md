---
title: Contexte de méthode
sidebar:
  order: 4
  label: 6.4 Contexte de méthode
---

Lorsqu'une fonction est appelée comme méthode d'un objet (par exemple obj.methode()), this fait référence à l'objet qui possède la méthode.

```javascript
const personne = {
  nom: "Alice",
  saluer() {
    console.log(this.nom);
  },
};
personne.saluer(); // Alice
```
