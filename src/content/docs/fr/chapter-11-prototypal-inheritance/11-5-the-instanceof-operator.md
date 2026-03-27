---
title: L’opérateur instanceof
sidebar:
  order: 5
  label: 11.5 L’opérateur instanceof
---

L’opérateur `instanceof` teste si la propriété `prototype` d’un constructeur apparaît quelque part dans la chaîne de prototypes d’un objet. Il retourne un booléen.

### Exemple de code

```javascript
function Car(make) {
  this.make = make;
}
const tesla = new Car("Tesla");
console.log(tesla instanceof Car); // true
console.log(tesla instanceof Object); // true
console.log(tesla instanceof Array); // false
```
