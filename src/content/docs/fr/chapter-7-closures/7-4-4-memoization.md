---
title: Mémoïsation
sidebar:
  order: 4
  label: 7.4.4 Mémoïsation
---

La mémoïsation utilise des fermetures pour mettre en cache les résultats d’appels coûteux, évitant ainsi des calculs répétés.

```javascript
function factorielleMemoisee() {
  const cache = {};
  return function factorielle(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return 1;
    cache[n] = n * factorielle(n - 1);
    return cache[n];
  };
}
const fact = factorielleMemoisee();
console.log(fact(5)); // 120
console.log(fact(5)); // depuis le cache
```
