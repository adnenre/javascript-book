---
title: Constructor Context
sidebar:
  order: 5
  label: 6.5 Contexte de constructeur
---

Lorsqu'une fonction est utilisée comme constructeur avec le mot‑clé new, this fait référence à la nouvelle instance créée.

```javascript
function Personne(nom) {
  this.nom = nom;
}
const alice = new Personne("Alice");
console.log(alice.nom); // Alice
```
