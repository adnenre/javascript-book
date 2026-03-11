---
title: Déstructuration des paramètres
sidebar:
  order: 4
  label: 5.7.4 Déstructuration des paramètres
---

Les paramètres peuvent être déstructurés directement dans la signature de la fonction, extrayant des valeurs d'objets ou de tableaux passés en arguments.

```javascript
function afficherUtilisateur({ nom, age }) {
  console.log(`${nom} a ${age} ans`);
}
afficherUtilisateur({ nom: "Alice", age: 30 }); // Alice a 30 ans
```
