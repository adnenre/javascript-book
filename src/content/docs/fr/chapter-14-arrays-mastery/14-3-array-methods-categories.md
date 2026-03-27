---
title: Catégories de méthodes de tableau
sidebar:
  order: 3
  label: 14.3 Catégories de méthodes de tableau
---

Les méthodes de tableau en JavaScript sont regroupées en trois catégories selon leur comportement :

- **Méthodes mutatrices** – modifient le tableau original (ex. `push`, `pop`, `splice`).
- **Méthodes d’accès** – retournent une nouvelle valeur ou un nouveau tableau sans modifier l’original (ex. `concat`, `slice`, `includes`).
- **Méthodes d’itération** – parcourent les éléments et effectuent des opérations (ex. `forEach`, `map`, `filter`, `reduce`).

### Exemple de code

```javascript
const arr = [1, 2, 3];

// Mutateur (modifie l’original)
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// Accesseur (retourne un nouveau tableau)
const newArr = arr.slice(1, 3);
console.log(newArr); // [2, 3]
console.log(arr); // inchangé [1, 2, 3, 4]

// Itération (ne mute pas)
arr.forEach((x) => console.log(x * 2)); // 2,4,6,8
```
