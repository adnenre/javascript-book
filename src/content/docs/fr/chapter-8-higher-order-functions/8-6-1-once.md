---
title: once()
sidebar:
  order: 1
  label: 8.6.1 once()
---

once garantit qu’une fonction donnée n’est appelée qu’une seule fois, quel que soit le nombre d’invocations. Les appels suivants retournent le résultat de la première invocation.

```javascript
function uneSeuleFois(fn) {
  let appele = false;
  let resultat;
  return function (...args) {
    if (!appele) {
      resultat = fn(...args);
      appele = true;
    }
    return resultat;
  };
}

const initialiser = uneSeuleFois(() => console.log("Initialisation"));
initialiser(); // Initialisation
initialiser(); // (rien)
initialiser(); // (rien)
```
