---
title: if, else if, else
sidebar:
  order: 1
  label: 4.1.1 if, else if, else
---

L'instruction if exécute un bloc de code si une condition spécifiée est vraie. Les blocs optionnels else if testent des conditions supplémentaires, et un bloc else s'exécute si aucune des conditions précédentes n'est vraie.

```javascript
let agePersonne = 20;

if (agePersonne < 18) {
  console.log("Mineur");
} else if (agePersonne >= 18 && agePersonne < 65) {
  console.log("Adulte");
} else {
  console.log("Senior");
}
```
