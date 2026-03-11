---
title: Object.defineProperty()
sidebar:
  order: 6
  label: 10.7.6 Object.defineProperty()
---

Object.defineProperty() définit une nouvelle propriété ou modifie une propriété existante avec un descripteur donné.

```javascript
const obj = {};
Object.defineProperty(obj, "x", { value: 10, writable: false });
console.log(obj.x); // 10
```
