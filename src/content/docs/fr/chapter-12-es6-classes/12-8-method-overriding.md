---
title: Remplacement de méthode
sidebar:
  order: 8
  label: 12.8 Remplacement de méthode
---

La surcharge (ou redéfinition) de méthode se produit lorsqu’une classe enfant fournit une implémentation spécifique d’une méthode qui existe déjà dans la classe parente. La méthode de l’enfant remplace celle du parent. Le mot‑clé `super` peut être utilisé pour appeler la version parente.

### Points clés

- La surcharge permet un comportement polymorphe.
- Vous pouvez choisir de remplacer complètement ou d’étendre la méthode parente.
- La signature (paramètres) n’a pas besoin d’être identique (mais c’est généralement le cas pour plus de clarté).

### Exemple de code

```javascript
class Shape {
  area() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  // Redéfinition de area
  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  // Redéfinition de area
  area() {
    return Math.PI * this.radius ** 2;
  }
}

const shapes = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach((s) => console.log(s.area())); // 20, 28.27...
```
