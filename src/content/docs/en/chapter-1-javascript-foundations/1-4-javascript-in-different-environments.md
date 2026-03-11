---
title: JavaScript in Different Environments
sidebar:
  order: 4
  label: 1.4 JavaScript in Different Environments
---

JavaScript was born in the browser, but today it runs in many environments.

**Browser**:

- Manipulates the DOM (HTML elements).
- Handles user events (clicks, form submissions).
- Communicates with servers via `fetch` or `XMLHttpRequest`.
- Uses browser APIs like `localStorage`, geolocation, etc.

Example – changing page content:

```html
<button id="btn">Click me</button>
<script>
  document.getElementById("btn").addEventListener("click", () => {
    document.body.innerHTML += "<p>Button clicked!</p>";
  });
</script>
```

Node.js: Runs on servers, desktops, or embedded devices. Provides file system access, networking, and operating system features. Uses the require (or
import) syntax for modules.

**Example** – reading a file:

```javascript
const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Other environments:

- Deno: a secure runtime for TypeScript and JavaScript.

- Bun: a fast all‑in‑one JavaScript runtime.

- Mobile apps: React Native, NativeScript.

- Desktop apps: Electron, NW.js.

> _Each environment provides its own set of APIs, but the core language remains the same._
