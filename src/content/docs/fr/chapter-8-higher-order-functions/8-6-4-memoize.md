---
title: memoize()
sidebar:
  order: 4
  label: 8.6.4 memoize()
---

La mémoïsation met en cache les résultats d’appels coûteux en fonction des arguments fournis. Les appels ultérieurs avec les mêmes arguments retournent la valeur en cache sans recalculer.

```javascript
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const cle = JSON.stringify(args);
    if (cache.has(cle)) {
      return cache.get(cle);
    }
    const resultat = fn(...args);
    cache.set(cle, resultat);
    return resultat;
  };
}

const factorielleLente = memoize((n) => {
  console.log("Calcul en cours...");
  return n <= 1 ? 1 : n * factorielleLente(n - 1);
});

console.log(factorielleLente(5)); // Calcul en cours... 120
console.log(factorielleLente(5)); // 120 (depuis le cache)
```
