---
title: Variables privées
sidebar:
  order: 1
  label: 7.4.1 Variables privées
---

Les fermetures (Closures) permettent de créer des variables privées qui ne peuvent pas être accédées directement de l’extérieur. Seules les fonctions retournées peuvent les lire ou les modifier.

```javascript
function creerPersonne(nom) {
  let _nom = nom; // privé
  return {
    getNom() {
      return _nom;
    },
    setNom(nouveauNom) {
      _nom = nouveauNom;
    },
  };
}
const personne = creerPersonne("Alice");
console.log(personne.getNom()); // Alice
personne.setNom("Bob");
console.log(personne.getNom()); // Bob
```
