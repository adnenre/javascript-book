---
title: Écouteurs d’événements et callbacks
sidebar:
  order: 5
  label: 7.4.5 Écouteurs d’événements et callbacks
---

Les fermetures sont couramment utilisées dans les gestionnaires d’événements pour conserver un état à travers plusieurs événements sans variables globales.

```javascript
function configurerBouton(idBouton) {
  let compteur = 0;
  document.getElementById(idBouton).addEventListener("click", function () {
    compteur++;
    console.log(`Cliqué ${compteur} fois`);
  });
}
configurerBouton("monBouton");
```
