---
title: Web APIs / C++ APIs
sidebar:
  order: 3
  label: 18.1.3 Web APIs / C++ APIs
---

Web APIs (browser) and C++ APIs (Node.js) are external features provided by the runtime environment that extend JavaScript's capabilities beyond the core language. These APIs are not part of JavaScript itself but are made available by the host environment.

## Browser Web APIs

```javascript
// Browser-specific APIs
console.log("=== Browser Web APIs ===");

// DOM API - Manipulate HTML documents
const element = document.createElement("div");
element.textContent = "Hello World";
element.classList.add("container");
element.setAttribute("data-id", "123");
document.body.appendChild(element);

// Timer APIs - Schedule delayed execution
const timeoutId = setTimeout(() => {
  console.log("Delayed execution");
}, 1000);

const intervalId = setInterval(() => {
  console.log("Repeated execution");
}, 2000);

// clearTimeout(timeoutId);
// clearInterval(intervalId);

// Fetch API - Network requests
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Storage APIs - Client-side storage
// LocalStorage (persistent, ~5-10MB)
localStorage.setItem("key", "value");
sessionStorage.setItem("temp", "data");
const stored = localStorage.getItem("key");

// IndexedDB (large data storage, async)
const request = indexedDB.open("MyDatabase", 1);
request.onsuccess = (event) => {
  const db = event.target.result;
  console.log("Database opened:", db);
};

// Geolocation API - Device position
navigator.geolocation.getCurrentPosition(
  (position) => console.log(position.coords),
  (error) => console.error(error),
);

// WebSocket API - Real-time communication
const ws = new WebSocket("wss://example.com/socket");
ws.onmessage = (event) => console.log("Message:", event.data);
ws.onopen = () => ws.send("Hello Server");

// Canvas API - Graphics rendering
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 100);
ctx.strokeStyle = "blue";
ctx.strokeRect(20, 20, 80, 80);

// Web Workers - Background threads
const worker = new Worker("worker.js");
worker.postMessage({ task: "compute", data: [1, 2, 3] });
worker.onmessage = (event) => console.log("Result:", event.data);

// History API - Browser navigation
history.pushState({ page: 2 }, "Title", "/page2");
window.onpopstate = (event) => console.log("Back/Forward:", event.state);

// Notification API - System notifications
Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    new Notification("Hello!", { body: "Notification from web app" });
  }
});

// Console API - Debugging
console.log("Standard log");
console.error("Error message");
console.warn("Warning message");
console.table([{ name: "John", age: 30 }]);
console.time("Operation");
// ... code ...
console.timeEnd("Operation");

// Performance API - Timing measurements
performance.mark("start");
// ... code ...
performance.mark("end");
performance.measure("duration", "start", "end");
const entries = performance.getEntriesByType("measure");
console.log(entries[0].duration);
```

## Node.js C++ APIs (Native Addons)

```javascript
// Node.js C++ APIs - Native bindings to C++ libraries
const fs = require("fs");
const crypto = require("crypto");
const http = require("http");
const https = require("https");
const zlib = require("zlib");
const child_process = require("child_process");
const cluster = require("cluster");
const net = require("net");
const dgram = require("dgram");

// File System (libuv thread pool - C++ implementation)
fs.readFile("/path/to/file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File read complete:", data);
});

// Watch for file changes
fs.watch("/path/to/dir", (eventType, filename) => {
  console.log(`${eventType}: ${filename}`);
});

// Stream API (C++ backed)
const readStream = fs.createReadStream("/path/to/large/file.txt");
const writeStream = fs.createWriteStream("/path/to/destination.txt");
readStream.pipe(writeStream);

// Crypto (OpenSSL C++ bindings)
crypto.pbkdf2("password", "salt", 100000, 64, "sha512", (err, derivedKey) => {
  console.log("Hash:", derivedKey.toString("hex"));
});

// Generate random bytes (C++ entropy source)
crypto.randomBytes(32, (err, buffer) => {
  console.log("Random bytes:", buffer.toString("hex"));
});

// HTTP Server (libuv C++ implementation)
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Node.js\n");
});
server.listen(3000);

// HTTPS with TLS (OpenSSL)
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};
https
  .createServer(options, (req, res) => {
    res.end("Secure connection\n");
  })
  .listen(443);

// Compression (zlib C++ bindings)
const input = Buffer.from("Hello World!");
zlib.gzip(input, (err, compressed) => {
  console.log("Compressed:", compressed);
});

// Child Process (libuv)
const ls = child_process.spawn("ls", ["-la"]);
ls.stdout.on("data", (data) => {
  console.log(`Output: ${data}`);
});

// Process management
const { exec } = require("child_process");
exec("npm install", (error, stdout, stderr) => {
  if (error) console.error(`Error: ${error}`);
  console.log(stdout);
});

// DNS Resolution (c-ares C++ library)
const dns = require("dns");
dns.lookup("example.com", (err, address, family) => {
  console.log("IP Address:", address);
});

dns.resolve("example.com", "A", (err, records) => {
  console.log("DNS Records:", records);
});

// Cluster API (multi-process)
if (cluster.isMaster) {
  cluster.fork();
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Worker process
  http.createServer((req, res) => res.end("Hello")).listen(8000);
}

// TCP Server (libuv)
const tcpServer = net.createServer((socket) => {
  socket.write("Welcome to TCP server\n");
  socket.on("data", (data) => {
    console.log("Received:", data.toString());
  });
});
tcpServer.listen(8080);

// UDP Socket (libuv)
const udpSocket = dgram.createSocket("udp4");
udpSocket.on("message", (msg, rinfo) => {
  console.log(`Received: ${msg} from ${rinfo.address}:${rinfo.port}`);
});
udpSocket.bind(41234);
```

## Performance Considerations

```javascript
// Web APIs vs Native JavaScript performance
console.log("=== Performance Comparison ===");

// Native JavaScript (fast)
const nativeStart = performance.now();
for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}
console.log(`Native JS: ${performance.now() - nativeStart}ms`);

// Web API call (slower - crosses boundary)
const webAPIStart = performance.now();
for (let i = 0; i < 10000; i++) {
  localStorage.setItem(`key${i}`, `value${i}`);
}
console.log(`Web API: ${performance.now() - webAPIStart}ms`);

// C++ API call (Node.js - thread pool overhead)
const cppStart = Date.now();
for (let i = 0; i < 100; i++) {
  crypto.pbkdf2Sync("password", "salt", 1000, 32, "sha256");
}
console.log(`C++ API (sync): ${Date.now() - cppStart}ms`);

// Best practice: Batch API calls
// Bad - multiple individual calls
for (let i = 0; i < 100; i++) {
  localStorage.setItem(`item${i}`, data[i]);
}

// Good - batch operation
const batchData = {};
for (let i = 0; i < 100; i++) {
  batchData[`item${i}`] = data[i];
}
localStorage.setItem("batch", JSON.stringify(batchData));
```
