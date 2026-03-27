---
title: Collections HTML
sidebar:
  order: 2
  label: 14.5.2 Collections HTML
---

Les collections HTML sont des objets semblables à des tableaux retournés par des méthodes DOM comme `document.getElementsByTagName()`, `document.getElementsByClassName()` et la propriété `children`. Ce sont des collections vivantes : les modifications du DOM y sont automatiquement reflétées. Ce ne sont pas de vrais tableaux et elles n’ont que quelques méthodes (`item`, `namedItem`).

### Points clés

- Vivantes : se mettent à jour automatiquement lors des changements DOM.
- Pas de vrais tableaux ; ont une propriété `length` mais pas les méthodes de tableau.
- Convertissez‑les en tableau avec `Array.from()` pour utiliser les méthodes de tableau.
- Inclut également `NodeList` de `querySelectorAll` (souvent statique, pas vivante).

### Exemple de code

```javascript
// Supposons que le HTML contient des éléments <div>
const divs = document.getElementsByTagName("div");
console.log(divs.length); // nombre de div
console.log(divs[0]); // premier div

// Impossible d’utiliser forEach directement sur HTMLCollection
// divs.forEach est undefined

// Conversion en tableau
const divArray = Array.from(divs);
divArray.forEach((div) => console.log(div));

// Pour NodeList (statique)
const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item)); // fonctionne, mais non vivant
```
