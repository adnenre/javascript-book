---
title: L'objet arguments
sidebar:
  order: 3
  label: 5.7.3 L'objet arguments
---

À l'intérieur des fonctions non fléchées, l'objet arguments est un objet semblable à un tableau contenant les arguments passés. Il n'est pas disponible dans les fonctions fléchées.

```javascript
function afficherArgs() {
  console.log(arguments[0]);
  console.log(arguments.length);
}
afficherArgs("bonjour", 42); // bonjour, 2
```
