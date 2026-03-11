---
title: Expressions de fonction
sidebar:
  order: 2
  label: 5.2 Expressions de fonction
---

Une expression de fonction définit une fonction comme partie d'une expression plus large, généralement en l'affectant à une variable. La fonction peut être nommée ou anonyme. Contrairement aux déclarations, les expressions de fonction ne sont pas remontées (hoisted).

```javascript
const multiplication = function (a, b) {
  return a * b;
};
console.log(multiplication(4, 5)); // 20
```
