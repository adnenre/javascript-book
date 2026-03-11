---
title: Considérations deperformance sur les fermetures
sidebar:
  order: 5
  label: 7.5 Considérations de performance sur les fermetures
---

Les fermetures ont un coût mémoire car les variables externes qu’elles référencent restent vivantes tant que la fermeture elle‑même existe. Cela peut entraîner des fuites mémoire si des fermetures sont conservées involontairement (par exemple dans des écouteurs d’événements à longue durée de vie). Les moteurs JavaScript modernes optimisent les fermetures, mais il est toujours prudent d’éviter les fermetures inutiles et de nettoyer les références quand c’est possible.

```javascript
// Fuite mémoire potentielle : l'écouteur garde une fermeture référençant de grandes données
function configurerLourd() {
  const grandTableau = new Array(1000000).fill("données");
  window.addEventListener("resize", () => {
    console.log(grandTableau.length); // la fermeture garde grandTableau en vie
  });
}
// Mieux : retirer l'écouteur quand il n'est plus nécessaire, ou éviter de référencer de grandes données
```
