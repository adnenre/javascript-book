---
title: Fonctions acceptant des fonctions (Callbacks)
sidebar:
  order: 2
  label: 8.2 Fonctions acceptant des fonctions (Callbacks)
---

Un callback est une fonction passée en argument à une autre fonction, pour être exécutée plus tard (souvent après une opération asynchrone ou à un moment précis). C’est un concept fondamental en JavaScript pour gérer les événements et les tâches asynchrones.

```javascript
function traiterSaisieUtilisateur(nom, callback) {
  console.log("Traitement en cours...");
  callback(nom);
}
traiterSaisieUtilisateur("Alice", (nom) => {
  console.log(`Bonjour, ${nom}`);
});
// Traitement en cours...
// Bonjour, Alice
```
