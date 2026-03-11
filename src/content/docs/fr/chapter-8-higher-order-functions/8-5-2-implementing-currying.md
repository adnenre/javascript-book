---
title: Implémentation du currying
sidebar:
  order: 2
  label: 8.5.2 Implémentation du currying
---

Nous pouvons créer une fonction utilitaire pour curryfier automatiquement n’importe quelle fonction. Cette fonction collecte les arguments jusqu’à en avoir assez, puis appelle la fonction d’origine.

```javascript
function curry(fn) {
  return function curryfiee(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...prochainsArgs) => curryfiee(...args, ...prochainsArgs);
  };
}

const somme = (a, b, c) => a + b + c;
const sommeCurry = curry(somme);
console.log(sommeCurry(1)(2)(3)); // 6
console.log(sommeCurry(1, 2)(3)); // 6
```
