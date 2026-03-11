---
title: Pièges courants liés aux fermetures
sidebar:
  order: 6
  label: 7.6 Pièges courants liés aux fermetures
---

Boucle avec var – Les fermetures dans des boucles capturent la même variable, ce qui conduit souvent à des résultats inattendus. Utiliser let ou une IIFE résout ce problème.

Création accidentelle de fermetures – Créer involontairement des fermetures peut causer des fuites mémoire.

Mauvaise compréhension de this – Les fonctions fléchées à l’intérieur des fermetures capturent le this lexical, ce qui peut ne pas correspondre à ce que l’on attend.

Utilisation excessive de fermetures – Elles peuvent rendre le code plus difficile à lire et à déboguer.

```javascript
// Problème classique de boucle avec var
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100); // affiche 3,3,3
}

// Solution avec let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100); // affiche 0,1,2
}
```
