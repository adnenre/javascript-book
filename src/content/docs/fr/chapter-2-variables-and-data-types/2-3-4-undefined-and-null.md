---
title: Undefined et Null
sidebar:
  order: 4
  label: 2.3.4 Undefined et Null
---

`undefined` et `null` représentent tous deux "aucune valeur", mais ils sont utilisés dans des contextes légèrement différents.

#### **`undefined`**

`undefined` signifie qu'une variable a été déclarée mais n'a pas reçu de valeur. C'est aussi la valeur de retour par défaut des fonctions qui ne retournent rien.

```javascript
let x;
console.log(x); // undefined

function foo() {}
console.log(foo()); // undefined
```

#### **`null`**

`null` est une valeur d'affectation qui représente "aucun objet" ou "vide". Il doit être explicitement défini.

```javascript
let y = null;
console.log(y); // null
```

**Comparaison :**

```javascript
console.log(undefined == null); // true (égalité large)
console.log(undefined === null); // false (égalité stricte)
```

> En pratique, utilisez null pour indiquer explicitement qu'une variable n'a pas de valeur, et laissez undefined représenter l'absence involontaire.
