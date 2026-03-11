---
title: Comprendre la portée lexicale
sidebar:
  order: 1
  label: 7.1 Comprendre la portée lexicale
---

La portée lexicale désigne la visibilité des variables en fonction de leur emplacement dans le code source. En JavaScript, la portée d’une variable est déterminée par sa position dans l’imbrication du code : les fonctions internes ont accès aux variables définies dans les portées externes, mais pas l’inverse. On parle aussi de portée statique.

```javascript
// Français
function externe() {
  let message = "Bonjour de l'extérieur";
  function interne() {
    console.log(message); // accessible
  }
  interne();
}
externe(); // "Bonjour de l'extérieur"
```
