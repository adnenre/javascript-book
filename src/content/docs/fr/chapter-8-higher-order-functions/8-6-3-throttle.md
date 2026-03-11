---
title: throttle()
sidebar:
  order: 3
  label: 8.6.3 throttle()
---

Le throttling garantit qu’une fonction est appelée au plus une fois dans un intervalle de temps spécifié. Contrairement au debounce, il garantit une exécution à intervalles réguliers tant que des événements se produisent.

```javascript
function throttle(fn, intervalle) {
  let dernierAppel = 0;
  return function (...args) {
    const maintenant = Date.now();
    if (maintenant - dernierAppel >= intervalle) {
      fn(...args);
      dernierAppel = maintenant;
    }
  };
}

const logger = throttle((msg) => console.log(msg), 1000);
logger("A"); // s'exécute
logger("B"); // ignoré si moins d'1s après A
```
