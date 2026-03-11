---
title: get and set
sidebar:
  order: 5
  label: 10.6.5 get and set
---

Les fonctions getter et setter permettent un accès calculé ou validé à une propriété. Elles sont définies avec get et set dans le descripteur.

```javascript
const personne = {
  prenom: "Jean",
  nom: "Dupont",
};
Object.defineProperty(personne, "nomComplet", {
  get() {
    return `${this.prenom} ${this.nom}`;
  },
  set(valeur) {
    [this.prenom, this.nom] = valeur.split(" ");
  },
});
console.log(personne.nomComplet); // Jean Dupont
personne.nomComplet = "Jeanne Martin";
console.log(personne.prenom); // Jeanne
```
