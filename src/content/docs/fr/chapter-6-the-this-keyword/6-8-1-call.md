---
title: call()
sidebar:
  order: 1
  label: 6.8.1 call()
---

call() invoque la fonction avec une valeur this donnée et des arguments fournis individuellement.

```javascript
function saluer(ville, pays) {
  console.log(`${this.nom} habite à ${ville}, ${pays}`);
}
const personne = { nom: "Alice" };
saluer.call(personne, "Paris", "France"); // Alice habite à Paris, France
```
