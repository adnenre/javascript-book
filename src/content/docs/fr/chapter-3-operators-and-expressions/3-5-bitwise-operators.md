---
title: Opérateurs binaires
sidebar:
  order: 5
  label: 3.5 Opérateurs binaires
---

Les opérateurs binaires traitent les opérandes comme des entiers signés 32 bits et effectuent des opérations au niveau binaire. Ils incluent & (ET), | (OU), ^ (OU exclusif), ~ (NON), << (décalage à gauche), >> (décalage à droite) et >>> (décalage à droite non signé).

```javascript
let p = 5; // 0101 en binaire
let q = 3; // 0011 en binaire

console.log(p & q); // 0001 -> 1 (ET)
console.log(p | q); // 0111 -> 7 (OU)
console.log(p ^ q); // 0110 -> 6 (OU exclusif)
console.log(~p); // 1010 -> -6 (NON)
console.log(p << 1); // 1010 -> 10 (décalage gauche)
console.log(p >> 1); // 0010 -> 2 (décalage droite)
```
