---
title: Règles de priorité de 'this'
sidebar:
  order: 9
  label: 6.9 Règles de priorité de 'this'
---

Lorsque plusieurs règles pourraient s'appliquer, this est déterminé par la priorité suivante (de la plus haute à la plus basse) :

- Liaison explicite (call, apply, bind)

- Invocation comme constructeur (new)

- Invocation comme méthode (contexte objet)

- Invocation de fonction (par défaut : objet global, ou undefined en mode strict)

- Fonctions fléchées – elles ne définissent pas leur propre this mais héritent de la portée externe (leur priorité n'est pas une règle de liaison, elles suivent simplement la portée lexicale).

```javascript
// Exemple illustrant la priorité
const obj = {
  nom: "objet",
  afficher: function () {
    console.log(this.nom);
  },
};

const afficherLiee = obj.afficher.bind({ nom: "lié" });
afficherLiee(); // 'lié' (la liaison explicite l'emporte)

new obj.afficher(); // undefined (new crée un nouvel objet, donc this fait référence à ce nouvel objet, pas à obj)
```
