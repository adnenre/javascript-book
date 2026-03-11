---
title: Récursion vs Itération
sidebar:
  order: 6
  label: 9.6 Récursion vs Itération
---

La récursion et l’itération sont deux façons de répéter du code. La récursion conduit souvent à des solutions plus propres et plus déclaratives pour les problèmes à structure récursive (par exemple les arbres). Cependant, la récursion peut être moins performante en raison de la surcharge de la pile d’appels et peut provoquer un débordement pour les récursions profondes. L’itération (boucles) est généralement plus efficace et plus sûre pour les grandes répétitions. Le

```javascript
//  factorielle itérative
function factorielleIterative(n) {
  let resultat = 1;
  for (let i = 2; i <= n; i++) resultat *= i;
  return resultat;
}
console.log(factorielleIterative(5)); // 120
```
