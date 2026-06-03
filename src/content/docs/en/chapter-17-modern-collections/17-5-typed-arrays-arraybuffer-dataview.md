---
title: Typed Arrays (ArrayBuffer, DataView)
sidebar:
  order: 16
  label: 17.5 Typed Arrays (ArrayBuffer, DataView)
---

Typed Arrays provide a way to work with binary data in JavaScript. They allow you to read and write raw binary data in a memory-efficient way, making them essential for graphics, audio, video, networking, and other performance-critical applications.

### What Are Typed Arrays?

Typed Arrays are array-like views of a binary data buffer (ArrayBuffer). They allow you to work with data in specific numeric formats (8-bit integers, 32-bit floats, etc.) directly in memory.

### The Typed Array Hierarchy

ArrayBuffer (raw binary data)
│
├── TypedArray views (specific data types)
│ ├── Int8Array, Uint8Array
│ ├── Int16Array, Uint16Array
│ ├── Int32Array, Uint32Array
│ ├── Float32Array
│ ├── Float64Array
│ └── BigInt64Array, BigUint64Array
│
└── DataView (flexible multi-type view)

### Available Typed Array Types

| Type                | Size (bytes) | Description             | Range                |
| ------------------- | ------------ | ----------------------- | -------------------- |
| `Int8Array`         | 1            | Signed 8-bit integer    | -128 to 127          |
| `Uint8Array`        | 1            | Unsigned 8-bit integer  | 0 to 255             |
| `Uint8ClampedArray` | 1            | Clamped unsigned 8-bit  | 0 to 255 (clamped)   |
| `Int16Array`        | 2            | Signed 16-bit integer   | -32,768 to 32,767    |
| `Uint16Array`       | 2            | Unsigned 16-bit integer | 0 to 65,535          |
| `Int32Array`        | 4            | Signed 32-bit integer   | -2^31 to 2^31-1      |
| `Uint32Array`       | 4            | Unsigned 32-bit integer | 0 to 2^32-1          |
| `Float32Array`      | 4            | 32-bit floating point   | ~1.2e-38 to 3.4e38   |
| `Float64Array`      | 8            | 64-bit floating point   | ~5.0e-324 to 1.8e308 |

### Key Points

- Typed Arrays always store numbers (not objects or mixed types).
- They provide predictable memory layout and performance.
- Values are automatically converted/clamped to fit the type.
- Typed Arrays work with WebGL, Canvas, Web Audio, WebSockets.
- They are zero-indexed and have standard array iteration methods.

### Example Code

```javascript
// Creating ArrayBuffers and Typed Arrays

// 1. Creating from length
const buffer = new ArrayBuffer(16); // 16 bytes
const int32View = new Int32Array(buffer);
console.log(int32View.length); // 4 (16 bytes / 4 bytes per int32)

// 2. Creating from array
const uint8Array = new Uint8Array([10, 20, 30, 40]);
console.log(uint8Array); // Uint8Array [10, 20, 30, 40]

// 3. Creating with specified length
const floatArray = new Float32Array(5);
floatArray[0] = 1.5;
floatArray[1] = 2.7;
console.log(floatArray); // Float32Array [1.5, 2.7, 0, 0, 0]

// 4. Different typed array views of same buffer
const sharedBuffer = new ArrayBuffer(8);
const int16View = new Int16Array(sharedBuffer);
const int8View = new Int8Array(sharedBuffer);

int16View[0] = 1000;
console.log(int8View[0]); // -24 (due to byte representation)
console.log(int8View[1]); // 3 (due to byte representation)

// 5. Uint8ClampedArray (clamps values to 0-255)
const clamped = new Uint8ClampedArray(5);
clamped[0] = -10; // Becomes 0
clamped[1] = 1000; // Becomes 255
clamped[2] = 128; // Stays 128
console.log(clamped); // Uint8ClampedArray [0, 255, 128, 0, 0]

// 6. Working with Typed Array methods
const numbers = new Int32Array([1, 2, 3, 4, 5]);
console.log(numbers.map((x) => x * 2)); // Int32Array [2, 4, 6, 8, 10]
console.log(numbers.filter((x) => x > 2)); // Int32Array [3, 4, 5]
console.log(numbers.reduce((a, b) => a + b, 0)); // 15

// 7. Converting between Typed Arrays and regular arrays
const regularArray = [1, 2, 3, 4, 5];
const typedArray = new Uint8Array(regularArray);
const backToRegular = Array.from(typedArray);
console.log(backToRegular); // [1, 2, 3, 4, 5]

// 8. Using spread operator
const anotherCopy = [...typedArray];
console.log(anotherCopy); // [1, 2, 3, 4, 5]

// 9. Performance: Typed Arrays are faster than regular arrays
console.time("Regular Array");
const reg = [];
for (let i = 0; i < 1000000; i++) {
  reg.push(i);
}
console.timeEnd("Regular Array");

console.time("Typed Array");
const typed = new Int32Array(1000000);
for (let i = 0; i < 1000000; i++) {
  typed[i] = i;
}
console.timeEnd("Typed Array");

// 10. Creating views with offset and length
const fullBuffer = new ArrayBuffer(32);
const partialView = new Int32Array(fullBuffer, 8, 3); // Start at byte 8, length 3
console.log(partialView.length); // 3
console.log(partialView.byteOffset); // 8
```
