---
title: Your First JavaScript Program
sidebar:
  order: 3
  label: 1.3 Your First JavaScript Program
---

Tradition dictates that the first program prints "Hello, world!". Here’s how to do it in JavaScript.

**In the browser console**:
Open the developer console and type:

```javascript
console.log("Hello, world!");
```

Press Enter and you'll see the message printed.

In an HTML file:
Create a file index.html with the following content:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First JS</title>
  </head>
  <body>
    <script>
      console.log("Hello, world!");
    </script>
  </body>
</html>
```

Open it in a browser and check the console.

In Node.js:
Create a file hello.js with:

```javascript
console.log("Hello, world!");
```

Run it with

```shell
node hello.js
```

Congratulations – you’ve just run your first JavaScript program!
