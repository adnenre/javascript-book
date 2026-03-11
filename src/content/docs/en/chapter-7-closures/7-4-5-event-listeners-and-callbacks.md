---
title: Event Listeners and Callbacks
sidebar:
  order: 5
  label: 7.4.5 Event Listeners and Callbacks
---

Closures are commonly used in event handlers to preserve state across multiple events without global variables.

```javascript
function setupButton(buttonId) {
  let count = 0;
  document.getElementById(buttonId).addEventListener("click", function () {
    count++;
    console.log(`Clicked ${count} times`);
  });
}
setupButton("myButton");
```
