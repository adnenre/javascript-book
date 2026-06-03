---
title: Garbage Collection and WeakMaps
sidebar:
  order: 13
  label: 17.3.1 Garbage Collection and WeakMaps
---

Understanding how WeakMaps interact with JavaScript's garbage collector is crucial for using them effectively and avoiding memory leaks.

### How Garbage Collection Works

JavaScript automatically frees memory for objects that are no longer reachable. An object is reachable if there is any reference to it from the root (global scope, currently executing functions, etc.).

### Strong References vs Weak References

| Reference Type | Prevents GC? | Example                                  |
| -------------- | ------------ | ---------------------------------------- |
| **Strong**     | Yes          | Regular variable, Map key, Array element |
| **Weak**       | No           | WeakMap key, WeakSet value               |

### When WeakMap Keys Are Collected

Object created → Added as WeakMap key → Object has no other references → Garbage collected → Entry automatically removed from WeakMap

### Key Points

- WeakMap keys are weakly referenced (don't prevent garbage collection).
- You cannot enumerate WeakMap keys because they might be collected at any time.
- WeakMaps help prevent memory leaks in long-running applications.
- The timing of garbage collection is not guaranteed (implementation dependent).

### Example Code

```javascript
// Demonstrating garbage collection with WeakMap

// Regular Map prevents garbage collection
let user = { name: 'Alice' };
const strongMap = new Map();
strongMap.set(user, 'user data');

user = null; // Remove direct reference

// The object still exists in strongMap!
// It cannot be garbage collected
console.log(strongMap.size); // 1 - still holding the object

// WeakMap allows garbage collection
let user2 = { name: 'Bob' };
const weakMap = new WeakMap();
weakMap.set(user2, 'user data');

user2 = null; // Remove direct reference

// The object can now be garbage collected
// The WeakMap entry will be automatically removed
// But we cannot check directly (no size property)

// Practical demonstration with DOM elements
function setupElementTracking() {
const elementMap = new WeakMap();

function trackElement(element, metadata) {
elementMap.set(element, metadata);
console.log('Element tracked:', metadata);
}

function getMetadata(element) {
return elementMap.get(element);
}

return { trackElement, getMetadata };
}

const tracker = setupElementTracking();

// Simulate DOM elements
let div1 = { nodeType: 'DIV', id: 'main' };
let div2 = { nodeType: 'DIV', id: 'sidebar' };

tracker.trackElement(div1, { clicks: 0, visible: true });
tracker.trackElement(div2, { clicks: 5, visible: false });

console.log(tracker.getMetadata(div1)); // { clicks: 0, visible: true }

// When div1 is removed from DOM
div1 = null; // No other references

// The tracked metadata will be automatically cleaned up
// No manual cleanup needed!

// Memory leak example (without WeakMap)
class LeakyCache {
constructor() {
this.cache = new Map();
}

set(obj, value) {
this.cache.set(obj, value);
}

get(obj) {
return this.cache.get(obj);
}

size() {
return this.cache.size;
}
}

let leakyCache = new LeakyCache();
let tempObject = { id: 123 };
leakyCache.set(tempObject, 'important data');

console.log(leakyCache.size()); // 1

tempObject = null; // Remove reference

// Memory leak! The object is still in cache
console.log(leakyCache.size()); // 1 - cannot be garbage collected

// Fixed version with WeakMap
class SafeCache {
constructor() {
this.cache = new WeakMap();
}

set(obj, value) {
this.cache.set(obj, value);
}

get(obj) {
return this.cache.get(obj);
}

// No size() method because WeakMap is not enumerable
}

let safeCache = new SafeCache();
let tempObject2 = { id: 456 };
safeCache.set(tempObject2, 'important data');

tempObject2 = null; // Remove reference

// The cached data can now be garbage collected
// No memory leak!

// Event listener cleanup example
function setupWeakMapEventHandlers() {
const handlers = new WeakMap();

function addHandler(element, event, handler) {
if (!handlers.has(element)) {
handlers.set(element, new Map());
}
const elementHandlers = handlers.get(element);
elementHandlers.set(event, handler);
element.addEventListener(event, handler);
}

function removeHandlers(element) {
if (handlers.has(element)) {
const elementHandlers = handlers.get(element);
for (const [event, handler] of elementHandlers) {
element.removeEventListener(event, handler);
}
// WeakMap entry will be cleaned up automatically
}
}

return { addHandler, removeHandlers };
}

// GC demonstration with multiple references
let objA = { id: 'A' };
let objB = { id: 'B' };
let objC = { id: 'C' };

const demoWeakMap = new WeakMap();
demoWeakMap.set(objA, 'data A');
demoWeakMap.set(objB, 'data B');
demoWeakMap.set(objC, 'data C');

// All three objects are in the WeakMap

objA = null; // objA can be GC'd
objB = null; // objB can be GC'd
// objC still has a reference

// After garbage collection runs:
// - Entries for objA and objB are removed
// - Entry for objC remains

// You cannot verify this directly (no iteration), but it happens automatically

// Best practices for WeakMap usage
class BestPractices {
constructor() {
this.\_private = new WeakMap();
}

// Always use objects as keys
setData(obj, data) {
if (typeof obj !== 'object' || obj === null) {
throw new TypeError('WeakMap key must be an object');
}
this.\_private.set(obj, data);
}

getData(obj) {
return this.\_private.get(obj);
}

hasData(obj) {
return this.\_private.has(obj);
}

deleteData(obj) {
return this.\_private.delete(obj);
}
}

// Memory leak prevention in long-running apps
const userSessionData = new WeakMap();

function createSession(user) {
userSessionData.set(user, {
createdAt: Date.now(),
activityLog: []
});
}

function logActivity(user, action) {
const session = userSessionData.get(user);
if (session) {
session.activityLog.push({ action, timestamp: Date.now() });
}
}

// When user logs out
function endSession(user) {
// No need to manually delete
// Just remove all strong references to user
user = null;
// Session data will be cleaned up automatically
}
```
