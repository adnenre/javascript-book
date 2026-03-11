---
title: Contrôle de boucle
sidebar:
  order: 3
  label: 4.3  Contrôle de boucle
---

Les instructions de contrôle de boucle modifient l'exécution normale des boucles :

break – Termine la boucle ou l'instruction switch courante et transfère le contrôle à l'instruction suivant la boucle terminée.

continue – Ignore le reste de l'itération courante et passe à l'itération suivante de la boucle.

Étiquettes (labels) – Permettent d'identifier une boucle, afin que break ou continue puisse cibler une boucle externe spécifique dans le cas de boucles imbriquées.

```javascript
// break : sortir de la boucle
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Affiche : 0,1,2,3,4

// continue : passer à l'itération suivante
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}
// Affiche : 0,1,3,4

// break étiqueté (sortir des boucles imbriquées)
externe: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break externe;
    console.log(`i=${i}, j=${j}`);
  }
}
// Affiche : i=0,j=0; i=0,j=1; i=0,j=2; i=1,j=0
```
