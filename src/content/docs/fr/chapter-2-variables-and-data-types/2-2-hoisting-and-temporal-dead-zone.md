---
title: Hoisting et zone morte temporaire
sidebar:
  order: 2
  label: 2.2 Hoisting et zone morte temporaire
---

Le **hoisting** est le comportement de JavaScript qui consiste à déplacer les déclarations en haut de leur portée avant l'exécution du code.

- Les déclarations `var` sont hissées et initialisées avec `undefined`.
- `let` et `const` sont hissées mais **non initialisées** – elles restent dans une "zone morte temporaire" (TDZ) jusqu'à ce que la déclaration soit évaluée.

Exemple avec `var` :

```javascript
console.log(x); // undefined (pas d'erreur)
var x = 5;
```

Exemple avec let (TDZ) :

```javascript
console.log(y); // ReferenceError : impossible d'accéder à 'y' avant initialisation
let y = 10;
```

La TDZ s'étend du début du bloc jusqu'à la déclaration. Accéder à la variable dans cette zone provoque une erreur.

Les déclarations de fonctions sont entièrement hissées (déclaration et corps). On peut les appeler avant leur apparition.

```javascript
direBonjour(); // "Bonjour !"
function direBonjour() {
  console.log("Bonjour !");
}
```

> Bonnes pratiques : déclarez les variables en haut de leur portée pour éviter les confusions liées à la TDZ.
