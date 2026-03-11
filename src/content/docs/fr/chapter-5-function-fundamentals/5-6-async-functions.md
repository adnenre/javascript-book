---
title: Fonctions asynchrones
sidebar:
  order: 6
  label: 5.6 Fonctions asynchrones
---

Les fonctions asynchrones (déclarées avec async) permettent d'écrire du code asynchrone en utilisant await pour suspendre l'exécution jusqu'à ce qu'une Promise soit résolue. Elles retournent toujours une Promise, ce qui les rend idéales pour gérer des opérations asynchrones.

```javascript
async function recupererDonnees() {
  const reponse = await fetch("https://api.example.com");
  const donnees = await reponse.json();
  return donnees;
}
```
