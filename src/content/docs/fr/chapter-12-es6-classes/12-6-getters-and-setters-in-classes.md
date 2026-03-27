---
title: Accesseurs et mutateurs dans les classes
sidebar:
  order: 6
  label: 12.6 Accesseurs et mutateurs dans les classes
---

Les getters et setters permettent de définir des méthodes qui sont accédées comme des propriétés. Ils offrent un moyen d’encapsuler la logique interne tout en conservant une interface de propriété simple.

### Points clés

- Définis avec les mots‑clés `get` et `set`.
- Utiles pour la validation, les propriétés calculées ou l’initialisation paresseuse.
- Peuvent être utilisés avec des champs privés pour contrôler l’accès.

### Exemple de code

```javascript
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (value <= 0) throw new Error("Le rayon doit être positif");
    this._radius = value;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const c = new Circle(5);
console.log(c.radius); // 5
c.radius = 10;
console.log(c.area); // 314.159...
c.radius = -1; // Error: Le rayon doit être positif
```
