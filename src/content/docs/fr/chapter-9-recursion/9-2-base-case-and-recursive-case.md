---
title: Cas de base et cas récursif
sidebar:
  order: 2
  label: 9.2 Cas de base et cas récursif
---

Toute fonction récursive doit avoir au moins un cas de base (une condition qui arrête la récursion) et un cas récursif (où la fonction s’appelle elle‑même). Le cas de base empêche la récursion infinie et le débordement de pile.

```javascript
function factorielle(n) {
  // Cas de base
  if (n <= 1) return 1;
  // Cas récursif
  return n * factorielle(n - 1);
}
console.log(factorielle(5)); // 12
```
