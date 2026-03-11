---
title: Array
sidebar:
  order: 2
  label: 2.4.2 Array
---

Les tableaux sont des collections ordonnées, indexées par des entiers. Ils peuvent contenir des valeurs de n'importe quel type, y compris des types mixtes.

**Création de tableaux** :

```javascript
let fruits = ["pomme", "banane", "orange"];
let mixte = [1, "deux", { trois: 3 }, [4, 5]];
let vide = new Array(10); // tableau clairsemé de longueur 10
```

Accès aux éléments :

```javascript
console.log(fruits[0]); // 'pomme'
console.log(fruits.length); // 3
```

Méthodes courantes :

push(), pop() – ajout/suppression à la fin.

shift(), unshift() – ajout/suppression au début.

splice() – ajout/suppression à n'importe quelle position.

slice() – extraire une portion.

indexOf(), includes() – recherche.

forEach(), map(), filter(), reduce() – itération.

```javascript
fruits.push("mangue"); // ['pomme','banane','orange','mangue']
let agrumes = fruits.slice(1, 3); // ['banane','orange']
```

Les tableaux sont des objets, donc aussi passés par référence.

```

```
