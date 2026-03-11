---
title: Event Handler Context
sidebar:
  order: 6
  label: 6.6 Event Handler Context
---

In DOM event handlers, this refers to the element that received the event (unless using arrow functions or explicit binding).

```javascript
button.addEventListener("click", function () {
  console.log(this); // the button element
});
```
