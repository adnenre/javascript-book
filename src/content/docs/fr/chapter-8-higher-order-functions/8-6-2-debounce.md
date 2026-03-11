---
title: debounce()
sidebar:
  order: 2
  label: 8.6.2 debounce()
---

Le debouncing limite la fréquence d’exécution d’une fonction. Il garantit que la fonction n’est appelée qu’après un certain délai depuis la dernière invocation. Utile pour gérer des événements comme la saisie ou le redimensionnement.

```javascript
function debounce(fn, delai) {
  let minuteur;
  return function (...args) {
    clearTimeout(minuteur);
    minuteur = setTimeout(() => fn(...args), delai);
  };
}

const logger = debounce((msg) => console.log(msg), 500);
logger("Bonjour"); // s'exécutera après 500ms si aucun autre appel
```
