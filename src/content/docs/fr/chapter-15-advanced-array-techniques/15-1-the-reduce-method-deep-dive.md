---
title: Analyse approfondie de la méthode reduce()
sidebar:
  order: 1
  label: 15.1 Analyse approfondie de la méthode reduce()
---

La méthode `reduce()` exécute une fonction de réduction sur chaque élément du tableau, résultant en une seule valeur de sortie. C’est l’une des méthodes de tableau les plus puissantes et flexibles, souvent utilisée pour additionner, grouper, aplatir et construire des accumulations complexes.

### Syntaxe

```javascript
array.reduce(callback(accumulateur, valeurCourante, index, tableau), valeurInitiale);
```

- **`accumulateur`** – accumule les valeurs de retour du callback ; c’est la valeur précédemment retournée ou la `valeurInitiale`.
- **`valeurCourante`** – l’élément en cours de traitement.
- **`index`** – l’indice de l’élément courant (optionnel).
- **`tableau`** – le tableau sur lequel `reduce` a été appelé (optionnel).
- **`valeurInitiale`** – valeur utilisée comme premier accumulateur ; si omise, le premier élément est utilisé comme accumulateur et l’itération commence au deuxième élément.

### Points clés

- Si `valeurInitiale` n’est pas fournie et que le tableau est vide, `reduce()` lève une `TypeError`.
- La fonction de réduction doit retourner une valeur qui devient le nouvel accumulateur.
- `reduce()` ne modifie pas le tableau original.
- Peut être utilisée pour implémenter de nombreuses autres méthodes de tableau (map, filter, etc.).

### Exemple de code

```javascript
// Somme de nombres
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Sans valeur initiale
const sum2 = numbers.reduce((acc, curr) => acc + curr);
console.log(sum2); // 15

// Construction d’un objet (groupement)
const fruits = ["pomme", "banane", "pomme", "orange", "banane", "pomme"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { pomme: 3, banane: 2, orange: 1 }

// Aplatissement d’un tableau de tableaux
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5]

// Enchaînement d’opérations
const pipeline = [1, 2, 3, 4, 5].reduce((acc, val) => {
  if (val % 2 === 0) acc.push(val * 2);
  return acc;
}, []);
console.log(pipeline); // [4, 8] (filtrer les pairs puis doubler)
```
