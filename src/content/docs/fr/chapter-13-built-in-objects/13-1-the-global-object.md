---
title: l'objet global
sidebar:
  order: 1
  label: 13.1 l'objet global
---

L’**objet global** est un objet toujours accessible qui contient les variables globales, les fonctions et les objets intégrés. Dans les navigateurs, c’est `window` ; dans Node.js, c’est `global` ; dans les environnements JavaScript modernes, `globalThis` fournit un moyen unifié d’accéder à l’objet global.

### Points clés

- Les variables globales déclarées avec `var` deviennent des propriétés de l’objet global.
- Les fonctions globales comme `setTimeout`, `console`, etc., sont des propriétés de l’objet global.
- `globalThis` fonctionne dans tous les environnements (navigateur, Node.js, Web Workers).

### Exemple de code

```javascript
// Dans un navigateur, cela affiche l'objet window
console.log(globalThis === window); // true (dans un navigateur)

// Variable globale avec var
var myGlobal = "Bonjour";
console.log(globalThis.myGlobal); // "Bonjour"

// Fonction globale
function sayHi() {
  console.log("Salut");
}
globalThis.sayHi(); // "Salut"
```
