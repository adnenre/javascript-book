---
title: BigInt
sidebar:
  order: 6
  label: 2.3.6 BigInt
---

`BigInt`est un type numérique primitif qui peut représenter des entiers avec une précision arbitraire. Il a été ajouté en ES2020 pour gérer des nombres plus grands que `2^53 - 1` (l'entier sûr maximal pour `Number`).

Créez un `BigInt` en ajoutant `n` à la fin d'un entier ou en utilisant la fonction `BigInt()`.

```javascript
let grand = 123456789012345678901234567890n;
let aussiGrand = BigInt("9007199254740993");
```

Opérations :

L'arithmétique avec BigInt fonctionne de manière similaire, mais on ne peut pas mélanger BigInt et Number ordinaires dans les opérations.

```javascript
let somme = 100n + 200n; // 300n
// let mix = 100n + 50; // TypeError
```

Les comparaisons (>, <) fonctionnent entre types.

```javascript
console.log(100n > 50); // true
```

La division tronque vers zéro.

```javascript
console.log(5n / 2n); // 2n
```

> BigInt est utile pour les applications nécessitant une haute précision (cryptographie, grands identifiants), mais pas pour les calculs courants en raison de problèmes de performance et d'interopérabilité.
