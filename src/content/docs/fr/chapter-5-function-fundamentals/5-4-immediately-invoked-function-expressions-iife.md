---
title: Expressions de fonction immédiatement invoquées
sidebar:
  order: 4
  label: 5.4 Expressions de fonction immédiatement invoquées
---

Une IIFE est une fonction qui est exécutée immédiatement après sa définition. Elle est souvent utilisée pour créer un espace privé et éviter de polluer l'espace global. Elle peut être écrite avec des déclarations de fonction ou des fonctions fléchées.

```javascript
/
(function() {
  console.log("IIFE exécutée");
})();

(() => console.log("IIFE fléchée"))();
```
