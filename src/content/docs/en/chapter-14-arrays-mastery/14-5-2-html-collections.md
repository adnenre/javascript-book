---
title: HTML Collections
sidebar:
  order: 2
  label: 14.5.2 HTML Collections
---

HTML collections are array‑like objects returned by DOM methods such as `document.getElementsByTagName()`, `document.getElementsByClassName()`, and the `children` property. They are live collections: changes in the DOM are automatically reflected. They are not real arrays and have only a few methods (`item`, `namedItem`).

### Key Points

- Live: updates automatically when DOM changes.
- Not real arrays; have a `length` property but no array methods.
- Convert to array using `Array.from()` to work with array methods.
- Also includes `NodeList` from `querySelectorAll` (often static, not live).

### Code Example

```javascript
// Assume HTML has <div> elements
const divs = document.getElementsByTagName("div");
console.log(divs.length); // number of divs
console.log(divs[0]); // first div

// Cannot use forEach directly on HTMLCollection
// divs.forEach is undefined

// Convert to array
const divArray = Array.from(divs);
divArray.forEach((div) => console.log(div));

// For NodeList (static)
const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item)); // works, but not live
```
