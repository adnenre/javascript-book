---
title: Intersection, union et différence de tableaux
sidebar:
  order: 5
  label: 15.5 Intersection, union et différence de tableaux
---

Les opérations ensemblistes sur les tableaux peuvent être implémentées avec des combinaisons de `filter`, `includes` et les objets `Set`. Pour les grands tableaux, `Set` offre des performances en O(n).

### Intersection (éléments communs)

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const intersection = arr1.filter((x) => arr2.includes(x));
console.log(intersection); // [3, 4]

// Avec Set pour plus d’efficacité
const set2 = new Set(arr2);
const intersectionSet = arr1.filter((x) => set2.has(x));
console.log(intersectionSet); // [3, 4]
```

### Union (tous les éléments uniques des deux tableaux)

```javascript
const union = [...new Set([...arr1, ...arr2])];
console.log(union); // [1, 2, 3, 4, 5, 6]
```

### Différence (éléments dans arr1 mais pas dans arr2)

```javascript
const difference = arr1.filter((x) => !arr2.includes(x));
console.log(difference); // [1, 2]

// Avec Set
const set2ForDiff = new Set(arr2);
const differenceSet = arr1.filter((x) => !set2ForDiff.has(x));
console.log(differenceSet); // [1, 2]
```

### Différence symétrique (éléments dans un seul des deux)

```javascript
const symDiff = [...arr1.filter((x) => !arr2.includes(x)), ...arr2.filter((x) => !arr1.includes(x))];
console.log(symDiff); // [1, 2, 5, 6]
```

### Utilisation de Set pour toutes les opérations (avec suppression des doublons)

```javascript
// Pour les tableaux pouvant contenir des doublons, il faut décider de les conserver ou non.
```
