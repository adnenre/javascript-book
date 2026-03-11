---
title: Property Enumeration Order
sidebar:
  order: 8
  label: 10.8 Property Enumeration Order
---

L’ordre d’énumération des propriétés en JavaScript moderne est : d’abord les clés numériques dans l’ordre croissant, puis les clés chaînes dans l’ordre d’insertion, puis les clés Symbol dans l’ordre d’insertion.

```javascript
const obj = { b: 2, 10: "dix", a: 1, 1: "un" };
console.log(Object.keys(obj)); // ['1', '10', 'b', 'a']
```
