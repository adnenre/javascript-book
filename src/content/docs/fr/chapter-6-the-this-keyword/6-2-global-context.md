---
title: Contexte global
sidebar:
  order: 2
  label: 6.2 Contexte global
---

Dans le contexte d'exécution global (en dehors de toute fonction), `this` fait référence à l'objet global. Dans les navigateurs, c'est `window` ; dans Node.js, c'est `global`. En mode strict, il reste l'objet global.

```javascript
console.log(this === window); // true (dans un navigateur)
```
