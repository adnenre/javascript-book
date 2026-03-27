---
title: arguments
sidebar:
  order: 1
  label: 14.5.1 arguments
---

À l’intérieur d’une fonction non fléchée, l’objet `arguments` est un objet semblable à un tableau contenant les arguments passés à la fonction. Il permet d’accéder à tous les arguments, indépendamment de la liste des paramètres. Cependant, ce n’est pas un vrai tableau ; vous devez le convertir si vous voulez utiliser les méthodes de tableau.

### Points clés

- Disponible uniquement dans les fonctions traditionnelles (pas les fonctions fléchées).
- Possède une propriété `length` et des éléments indexés.
- Peut être utilisé pour créer des fonctions variadiques (acceptant un nombre quelconque d’arguments).
- En JavaScript moderne, les paramètres du reste (`...args`) sont préférés à `arguments`.

### Exemple de code

```javascript
function sum() {
  console.log(arguments.length); // nombre d’arguments
  console.log(arguments[0]); // premier argument

  // Conversion en tableau pour utiliser reduce
  const argsArray = Array.from(arguments);
  const total = argsArray.reduce((acc, val) => acc + val, 0);
  return total;
}

console.log(sum(1, 2, 3)); // 6

// Paramètres du reste (alternative moderne)
function sumModern(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sumModern(1, 2, 3)); // 6
```
