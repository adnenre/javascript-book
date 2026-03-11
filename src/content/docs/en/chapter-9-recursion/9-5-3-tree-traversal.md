---
title: Tree Traversal
sidebar:
  order: 3
  label: 9.5.3 Tree Traversal
---

```javascript
const tree = {
  value: 1,
  children: [
    { value: 2, children: [] },
    { value: 3, children: [{ value: 4, children: [] }] },
  ],
};
function traverse(node) {
  console.log(node.value);
  node.children.forEach((child) => traverse(child));
}
traverse(tree); // 1,2,3,4

// Français
```
