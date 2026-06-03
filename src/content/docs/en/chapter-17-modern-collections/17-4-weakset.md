---
title: WeakSet
sidebar:
  order: 15
  label: 17.4 WeakSet
---

`WeakSet` is a special kind of Set that holds "weak" references to its values. Similar to WeakMap, WeakSet values must be objects and can be garbage collected when no other references exist.

### What Makes WeakSet Different?

| Feature                | Set                                                          | WeakSet                      |
| ---------------------- | ------------------------------------------------------------ | ---------------------------- |
| **Value types**        | Any value                                                    | Objects only (no primitives) |
| **Reference strength** | Strong (prevents GC)                                         | Weak (doesn't prevent GC)    |
| **Iteration**          | Yes                                                          | No (not iterable)            |
| **Size property**      | Yes (`.size`)                                                | No (cannot know size)        |
| **Methods**            | `add`, `has`, `delete`, `clear`, `keys`, `values`, `entries` | `add`, `has`, `delete` only  |
| **Garbage collection** | Values remain in memory                                      | Values can be collected      |

### Why Use WeakSet?

- **Object tracking**: Keep track of objects without preventing garbage collection
- **Private flags**: Mark objects as having been processed or visited
- **Security**: Store object membership information without exposing it via iteration

### Key Points

- WeakSet values must be objects (cannot be primitives).
- WeakSets are not iterable (you cannot loop over them).
- There's no way to get a list of values (values are weakly held).
- If an object has no other references, it can be garbage collected.
- When a value is collected, it's automatically removed from the WeakSet.

### Example Code

```javascript
// Basic WeakSet usage
const weakSet = new WeakSet();

// Values must be objects
const obj1 = {};
const obj2 = {};

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // false

// Cannot use primitives as values
// weakSet.add('string'); // TypeError: Invalid value used in weak set
// weakSet.add(123);      // TypeError
// weakSet.add(null);     // TypeError

// WeakSet does NOT prevent garbage collection
let user = { name: "Alice" };
const processedUsers = new WeakSet();
processedUsers.add(user);

console.log(processedUsers.has(user)); // true

user = null; // Remove reference
// The entry in processedUsers will be cleaned up automatically

// WeakSets are not iterable
// console.log([...weakSet]); // TypeError
// console.log(weakSet.size); // undefined

// Use Case 1: Marking objects as processed
const processed = new WeakSet();

function processObject(obj) {
  if (processed.has(obj)) {
    console.log("Already processed:", obj);
    return;
  }

  console.log("Processing:", obj);
  // Perform processing...
  processed.add(obj);
}

let item1 = { id: 1 };
let item2 = { id: 2 };

processObject(item1); // Processing: { id: 1 }
processObject(item1); // Already processed: { id: 1 }
processObject(item2); // Processing: { id: 2 }

item1 = null; // Can be GC'd, removed from WeakSet

// Use Case 2: Preventing double-initialization
const initialized = new WeakSet();

class Widget {
  constructor(element) {
    if (initialized.has(element)) {
      throw new Error("Element already has a Widget instance");
    }

    this.element = element;
    initialized.add(element);
    this.setup();
  }

  setup() {
    console.log("Setting up widget for:", this.element);
  }

  destroy() {
    initialized.delete(this.element);
  }
}

let container = { id: "container" };
const widget1 = new Widget(container); // Works
// const widget2 = new Widget(container); // Error: Already has Widget
widget1.destroy();
const widget3 = new Widget(container); // Works now

// Use Case 3: Tracking active connections
const activeConnections = new WeakSet();

class Connection {
  constructor(socket) {
    if (activeConnections.has(socket)) {
      throw new Error("Socket already in use");
    }
    this.socket = socket;
    activeConnections.add(socket);
  }

  close() {
    activeConnections.delete(this.socket);
  }

  isActive() {
    return activeConnections.has(this.socket);
  }
}

let socket1 = { id: "socket1" };
let conn1 = new Connection(socket1);
console.log(conn1.isActive()); // true
conn1.close();
console.log(conn1.isActive()); // false

// Use Case 4: Circular reference detection
const visited = new WeakSet();

function detectCycle(obj, path = []) {
  if (visited.has(obj)) {
    console.log("Circular reference detected:", [...path, obj]);
    return true;
  }

  visited.add(obj);

  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const result = detectCycle(obj[key], [...path, key]);
        if (result) return true;
      }
    }
  }

  visited.delete(obj);
  return false;
}

const objA = {};
const objB = {};
objA.ref = objB;
objB.ref = objA;

console.log(detectCycle(objA)); // true

// Use Case 5: Form validation visited fields
const visitedFields = new WeakSet();

class FormValidator {
  validateField(field, value) {
    if (!visitedFields.has(field)) {
      console.log(`First time validating field: ${field.name}`);
      visitedFields.add(field);
    }

    // Validation logic
    if (!value || value.trim() === "") {
      return { valid: false, message: "Field is required" };
    }

    return { valid: true };
  }

  resetField(field) {
    visitedFields.delete(field);
  }
}

const validator = new FormValidator();
let emailField = { name: "email", type: "input" };
let nameField = { name: "name", type: "input" };

console.log(validator.validateField(emailField, "test@example.com")); // First time
console.log(validator.validateField(emailField, "test@example.com")); // Already visited
console.log(validator.validateField(nameField, "")); // First time

emailField = null; // Can be GC'd

// Use Case 6: Memory-efficient event tracking
const eventTracked = new WeakSet();

class Analytics {
  trackEvent(element, eventType) {
    if (eventTracked.has(element)) {
      console.log(`Event already tracked for this element`);
      return;
    }

    console.log(`Tracking ${eventType} on element`);
    // Send analytics data
    eventTracked.add(element);
  }
}

const analytics = new Analytics();
let button = { id: "track-btn", type: "button" };

analytics.trackEvent(button, "click"); // Tracking click on element
analytics.trackEvent(button, "click"); // Event already tracked

button = null; // Can be GC'd, analytics data cleaned up

// Use Case 7: Preventing duplicate API calls
const pendingRequests = new WeakSet();

class APIClient {
  fetch(url, params) {
    const requestKey = { url, params };

    if (pendingRequests.has(requestKey)) {
      console.log("Request already in progress");
      return Promise.reject("Duplicate request");
    }

    pendingRequests.add(requestKey);

    return actualFetch(url, params).finally(() => {
      pendingRequests.delete(requestKey);
    });
  }
}

function actualFetch(url, params) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ data: "response" }), 1000);
  });
}

const client = new APIClient();
let request = { url: "/api/data", params: { id: 1 } };
// Simulating usage (async, but for demo)
console.log("Useful for preventing concurrent identical API calls");

// Use Case 8: WeakSet vs Set memory demonstration
function demonstrateMemory() {
  // Regular Set - prevents garbage collection
  let strongSet = new Set();
  let obj1 = { id: 1 };
  let obj2 = { id: 2 };
  strongSet.add(obj1);
  strongSet.add(obj2);

  // WeakSet - allows garbage collection
  let weak = new WeakSet();
  let obj3 = { id: 3 };
  let obj4 = { id: 4 };
  weak.add(obj3);
  weak.add(obj4);

  obj1 = null;
  obj2 = null;
  obj3 = null;
  obj4 = null;

  // strongSet still holds references (2 objects)
  // weakSet entries can be collected
  console.log("Strong Set still holds objects, WeakSet allows GC");
}

// Use Case 9: Implementing a "visited" system for graph traversal
const visitedNodes = new WeakSet();

class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }

  traverse() {
    visitedNodes.add(this);
    console.log("Visited:", this.value);

    for (const neighbor of this.neighbors) {
      if (!visitedNodes.has(neighbor)) {
        neighbor.traverse();
      }
    }
  }

  resetTraversal() {
    // Can't reset all at once (no iteration), but individual reset works
  }
}

const nodeA = new GraphNode("A");
const nodeB = new GraphNode("B");
const nodeC = new GraphNode("C");

nodeA.addNeighbor(nodeB);
nodeB.addNeighbor(nodeC);

nodeA.traverse(); // A, B, C
nodeA.resetTraversal();
// Next traversal will work but visitedNodes still holds references
// until nodes are GC'd

// Use Case 10: Feature flag tracking
const flaggedUsers = new WeakSet();

class FeatureManager {
  enableForUser(user, feature) {
    flaggedUsers.add(user);
    console.log(`Feature ${feature} enabled for user`);
  }

  isEnabled(user) {
    return flaggedUsers.has(user);
  }
}

const featureManager = new FeatureManager();
let currentUser = { id: 123, name: "Alice" };

featureManager.enableForUser(currentUser, "beta-feature");
console.log(featureManager.isEnabled(currentUser)); // true

currentUser = null; // User logs out
// Flag is automatically removed
```
