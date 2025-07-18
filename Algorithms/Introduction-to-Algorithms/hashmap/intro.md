# Comprehensive Guide to Hashing Techniques in Data Structures and Algorithms

## Table of Contents
1. [Introduction to Hashing](#introduction-to-hashing)
2. [Hash Functions](#hash-functions)
   - [Division Method](#division-method)
   - [Multiplication Method](#multiplication-method)
   - [Universal Hashing](#universal-hashing)
   - [Perfect Hashing](#perfect-hashing)
   - [Cryptographic Hash Functions](#cryptographic-hash-functions)
3. [Collision Resolution Techniques](#collision-resolution-techniques)
   - [Separate Chaining](#separate-chaining)
   - [Open Addressing](#open-addressing)
     - [Linear Probing](#linear-probing)
     - [Quadratic Probing](#quadratic-probing)
     - [Double Hashing](#double-hashing)
4. [Hash Tables](#hash-tables)
   - [Implementation in JavaScript](#hash-table-implementation)
   - [Operations and Time Complexity](#operations-and-time-complexity)
   - [Dynamic Resizing](#dynamic-resizing)
5. [Load Factor and Rehashing](#load-factor-and-rehashing)
6. [Specialized Hash Techniques](#specialized-hash-techniques)
   - [Bloom Filters](#bloom-filters)
   - [Cuckoo Hashing](#cuckoo-hashing)
   - [Consistent Hashing](#consistent-hashing)
   - [Extendible Hashing](#extendible-hashing)
7. [Applications of Hashing](#applications-of-hashing)
   - [Dictionaries and Maps](#dictionaries-and-maps)
   - [Database Indexing](#database-indexing)
   - [Caching](#caching)
   - [String Matching](#string-matching)
8. [Performance Analysis](#performance-analysis)
   - [Time Complexity](#time-complexity)
   - [Space Complexity](#space-complexity)
   - [Choosing the Right Hash Function](#choosing-the-right-hash-function)
9. [JavaScript Use Cases](#javascript-use-cases)
   - [Building Custom Map Implementations](#building-custom-map-implementations)
   - [Implementing Sets](#implementing-sets)
   - [Memoization and Caching](#memoization-and-caching)
10. [Common Interview Problems](#common-interview-problems)

## Introduction to Hashing

Hashing is a fundamental technique in computer science that maps data of arbitrary size to fixed-size values, typically used for fast data retrieval. A hash function takes input data and produces a hash code that serves as a kind of digital fingerprint of the data.

**Key Benefits:**
- Constant-time average case lookup, insertion, and deletion operations (O(1))
- Efficient data storage and retrieval
- Used in a wide variety of applications like databases, caching, and cryptography

**Basic Concept in JavaScript:**

```javascript
// Simple demonstration of the hashing concept
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  return hash;
}

console.log(simpleHash("hello")); // 532
console.log(simpleHash("world")); // 552
```

## Hash Functions

A good hash function should:
- Be deterministic (same input always yields same output)
- Generate a uniform distribution of hash values
- Be fast to compute
- Minimize collisions (different inputs mapping to the same output)

### Division Method

The division method computes the hash value by taking the remainder of the key divided by the table size.

```javascript
function divisionHash(key, tableSize) {
  // Convert key to a number if it's not already
  let numericKey = typeof key === 'number' ? key : simpleHash(key);
  return numericKey % tableSize;
}

console.log(divisionHash(532, 10)); // 2
console.log(divisionHash("hello", 10)); // 2
```

### Multiplication Method

The multiplication method uses a multiplier (typically an irrational number like (√5-1)/2) to create a fractional part that is then scaled to the table size.

```javascript
function multiplicationHash(key, tableSize) {
  // Convert key to a number if it's not already
  let numericKey = typeof key === 'number' ? key : simpleHash(key);
  
  const A = (Math.sqrt(5) - 1) / 2; // ≈ 0.6180339887
  const fractionalPart = (numericKey * A) % 1;
  
  return Math.floor(tableSize * fractionalPart);
}

console.log(multiplicationHash(532, 10)); // Example output
console.log(multiplicationHash("hello", 10)); // Example output
```

### Universal Hashing

Universal hashing aims to minimize collisions by randomly selecting hash functions from a family of functions.

```javascript
class UniversalHashFunction {
  constructor(prime, tableSize) {
    this.prime = prime; // Prime number larger than the maximum key value
    this.a = 1 + Math.floor(Math.random() * (prime - 1)); // Random value 1 <= a < prime
    this.b = Math.floor(Math.random() * prime); // Random value 0 <= b < prime
    this.tableSize = tableSize;
  }
  
  hash(key) {
    // Convert key to a number if it's not already
    let numericKey = typeof key === 'number' ? key : simpleHash(key);
    // Universal hash function: ((a * key + b) % prime) % tableSize
    return ((this.a * numericKey + this.b) % this.prime) % this.tableSize;
  }
}

const universalHasher = new UniversalHashFunction(101, 10);
console.log(universalHasher.hash(532)); // Random but consistent for this instance
console.log(universalHasher.hash("hello")); // Random but consistent for this instance
```

### Perfect Hashing

Perfect hashing ensures no collisions by using a two-level hash structure, particularly useful for static sets.

```javascript
// Perfect hashing is typically used in static datasets
// This is a simplified demonstration of the concept
class PerfectHash {
  constructor(keys) {
    this.keys = [...keys];
    this.primaryTable = this.buildPrimaryTable();
  }
  
  buildPrimaryTable() {
    // This is simplified; a real implementation would carefully select
    // hash functions to avoid collisions completely
    const table = {};
    for (const key of this.keys) {
      const hash = this.primaryHash(key);
      if (!table[hash]) {
        table[hash] = key;
      } else {
        // In perfect hashing, we would handle this by using a secondary hash table
        // Here we're simplifying by just storing in an array
        if (!Array.isArray(table[hash])) {
          table[hash] = [table[hash]];
        }
        table[hash].push(key);
      }
    }
    return table;
  }
  
  primaryHash(key) {
    return typeof key === 'number' ? key % 10 : simpleHash(key) % 10;
  }
  
  has(key) {
    const hash = this.primaryHash(key);
    if (!this.primaryTable[hash]) return false;
    
    if (Array.isArray(this.primaryTable[hash])) {
      return this.primaryTable[hash].includes(key);
    }
    
    return this.primaryTable[hash] === key;
  }
}

const perfectHashSet = new PerfectHash(["apple", "banana", "cherry"]);
console.log(perfectHashSet.has("apple")); // true
console.log(perfectHashSet.has("grape")); // false
```

### Cryptographic Hash Functions

Cryptographic hash functions are designed for security applications with properties like pre-image resistance, collision resistance, and avalanche effect.

```javascript
// JavaScript has built-in crypto module in Node.js
// This example shows how to use SHA-256 (requires Node.js environment)
async function sha256Hash(data) {
  // Note: This example runs only in Node.js, not in browsers
  // For browsers, you'd use the Web Crypto API
  
  // Node.js implementation
  // const crypto = require('crypto');
  // const hash = crypto.createHash('sha256');
  // hash.update(data);
  // return hash.digest('hex');
  
  // Web Crypto API (browser-compatible) implementation
  const encoder = new TextEncoder();
  const dataBuffer = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
  
  // Convert hashBuffer to hexadecimal string
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

// Usage example
async function demonstrateCryptoHash() {
  console.log(await sha256Hash("hello")); 
  // 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
}

// demonstrateCryptoHash();
```

## Collision Resolution Techniques

Collisions occur when different keys hash to the same value. There are several strategies to handle them:

### Separate Chaining

In separate chaining, each slot in the hash table contains a list of all elements that hash to that slot.

```javascript
class HashTableWithChaining {
  constructor(size = 10) {
    this.buckets = Array(size).fill().map(() => []);
    this.size = size;
  }
  
  hash(key) {
    let numericKey = typeof key === 'number' ? key : simpleHash(key);
    return numericKey % this.size;
  }
  
  set(key, value) {
    const index = this.hash(key);
    
    // Check if key already exists in chain
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index][i].value = value;
        return;
      }
    }
    
    // Key not found, add new key-value pair
    this.buckets[index].push({ key, value });
  }
  
  get(key) {
    const index = this.hash(key);
    
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        return this.buckets[index][i].value;
      }
    }
    
    return undefined;
  }
  
  delete(key) {
    const index = this.hash(key);
    
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index].splice(i, 1);
        return true;
      }
    }
    
    return false;
  }
  
  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      console.log(`Bucket ${i}:`, this.buckets[i]);
    }
  }
}

// Usage
const chainingHashTable = new HashTableWithChaining(5);
chainingHashTable.set("apple", 5);
chainingHashTable.set("banana", 8);
chainingHashTable.set("cherry", 3);
chainingHashTable.set("date", 1);
chainingHashTable.set("elderberry", 9);

console.log(chainingHashTable.get("banana")); // 8
chainingHashTable.display();
```

### Open Addressing

In open addressing, all elements are stored in the hash table itself, with no separate chains. When a collision occurs, an alternative position is found using a probing sequence.

#### Linear Probing

Linear probing checks the next slot sequentially until an empty slot is found.

```javascript
class HashTableWithLinearProbing {
  constructor(size = 10) {
    this.keys = Array(size).fill(null);
    this.values = Array(size).fill(null);
    this.size = size;
    this.count = 0;
  }
  
  hash(key) {
    let numericKey = typeof key === 'number' ? key : simpleHash(key);
    return numericKey % this.size;
  }
  
  set(key, value) {
    if (this.count >= this.size * 0.7) {
      // If load factor exceeds 0.7, resize and rehash
      this.resize();
    }
    
    let index = this.hash(key);
    
    // If the slot is occupied
    while (this.keys[index] !== null) {
      // If key already exists, update its value
      if (this.keys[index] === key) {
        this.values[index] = value;
        return;
      }
      
      // Linear probing: try the next slot
      index = (index + 1) % this.size;
    }
    
    // Found an empty slot
    this.keys[index] = key;
    this.values[index] = value;
    this.count++;
  }
  
  get(key) {
    let index = this.hash(key);
    
    while (this.keys[index] !== null) {
      if (this.keys[index] === key) {
        return this.values[index];
      }
      
      // Continue linear probing
      index = (index + 1) % this.size;
      
      // If we've gone through the entire table
      if (index === this.hash(key)) {
        return undefined;
      }
    }
    
    return undefined;
  }
  
  delete(key) {
    let index = this.hash(key);
    
    while (this.keys[index] !== null) {
      if (this.keys[index] === key) {
        // Mark as deleted
        this.keys[index] = null;
        this.values[index] = null;
        this.count--;
        
        // Rehash all elements in the same cluster
        this.rehashCluster(index);
        return true;
      }
      
      // Continue linear probing
      index = (index + 1) % this.size;
      
      // If we've gone through the entire table
      if (index === this.hash(key)) {
        return false;
      }
    }
    
    return false;
  }
  
  rehashCluster(index) {
    // Start from the next position
    let i = (index + 1) % this.size;
    
    // Rehash all keys in the cluster
    while (this.keys[i] !== null) {
      const key = this.keys[i];
      const value = this.values[i];
      
      // Remove the current key-value pair
      this.keys[i] = null;
      this.values[i] = null;
      this.count--;
      
      // Reinsert the key-value pair
      this.set(key, value);
      
      // Move to next position
      i = (i + 1) % this.size;
    }
  }
  
  resize() {
    const oldKeys = this.keys;
    const oldValues = this.values;
    
    // Double the size
    this.size *= 2;
    this.keys = Array(this.size).fill(null);
    this.values = Array(this.size).fill(null);
    this.count = 0;
    
    // Rehash all existing entries
    for (let i = 0; i < oldKeys.length; i++) {
      if (oldKeys[i] !== null) {
        this.set(oldKeys[i], oldValues[i]);
      }
    }
  }
  
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.keys[i] !== null) {
        console.log(`${i}: [${this.keys[i]} => ${this.values[i]}]`);
      } else {
        console.log(`${i}: empty`);
      }
    }
  }
}

// Usage
const linearProbingTable = new HashTableWithLinearProbing(10);
linearProbingTable.set("apple", 5);
linearProbingTable.set("banana", 8);
linearProbingTable.set("cherry", 3);
linearProbingTable.set("date", 1);

console.log(linearProbingTable.get("cherry")); // 3
linearProbingTable.display();
```

#### Quadratic Probing

Quadratic probing uses a quadratic function to determine the next slots to try, helping to avoid clustering.

```javascript
class HashTableWithQuadraticProbing {
  constructor(size = 10) {
    this.keys = Array(size).fill(null);
    this.values = Array(size).fill(null);
    this.size = size;
    this.count = 0;
  }
  
  hash(key) {
    let numericKey = typeof key === 'number' ? key : simpleHash(key);
    return numericKey % this.size;
  }
  
  set(key, value) {
    if (this.count >= this.size * 0.5) {
      // If load factor exceeds 0.5, resize and rehash
      // Lower threshold for quadratic probing to avoid infinite loops
      this.resize();
    }
    
    let index = this.hash(key);
    let i = 0;
    
    // Quadratic probing: try slots at positions hash(key) + 0², hash(key) + 1², hash(key) + 2², ...
    while (this.keys[(index + i*i) % this.size] !== null) {
      // If we find the key, update its value
      if (this.keys[(index + i*i) % this.size] === key) {
        this.values[(index + i*i) % this.size] = value;
        return;
      }
      
      i++;
      
      // Safety check to avoid infinite loops
      if (i >= this.size) {
        // If we've tried more positions than the table size, resize
        this.resize();
        return this.set(key, value);
      }
    }
    
    // Found an empty slot
    this.keys[(index + i*i) % this.size] = key;
    this.values[(index + i*i) % this.size] = value;
    this.count++;
  }
  
  get(key) {
    let index = this.hash(key);
    let i = 0;
    
    while (this.keys[(index + i*i) % this.size] !== null) {
      if (this.keys[(index + i*i) % this.size] === key) {
        return this.values[(index + i*i) % this.size];
      }
      
      i++;
      
      // If we've tried more positions than the table size, the key is not present
      if (i >= this.size) {
        return undefined;
      }
    }
    
    return undefined;
  }
  
  delete(key) {
    let index = this.hash(key);
    let i = 0;
    
    while (this.keys[(index + i*i) % this.size] !== null) {
      if (this.keys[(index + i*i) % this.size] === key) {
        // Mark as deleted
        this.keys[(index + i*i) % this.size] = null;
        this.values[(index + i*i) % this.size] = null;
        this.count--;
        
        // Rehash all elements to maintain the quadratic probing invariant
        this.rehash();
        return true;
      }
      
      i++;
      
      // If we've tried more positions than the table size, the key is not present
      if (i >= this.size) {
        return false;
      }
    }
    
    return false;
  }
  
  rehash() {
    const oldKeys = this.keys;
    const oldValues = this.values;
    
    this.keys = Array(this.size).fill(null);
    this.values = Array(this.size).fill(null);
    this.count = 0;
    
    // Rehash all existing entries
    for (let i = 0; i < oldKeys.length; i++) {
      if (oldKeys[i] !== null) {
        this.set(oldKeys[i], oldValues[i]);
      }
    }
  }
  
  resize() {
    const oldKeys = this.keys;
    const oldValues = this.values;
    
    // Double the size
    this.size *= 2;
    this.keys = Array(this.size).fill(null);
    this.values = Array(this.size).fill(null);
    this.count = 0;
    
    // Rehash all existing entries
    for (let i = 0; i < oldKeys.length; i++) {
      if (oldKeys[i] !== null) {
        this.set(oldKeys[i], oldValues[i]);
      }
    }
  }
  
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.keys[i] !== null) {
        console.log(`${i}: [${this.keys[i]} => ${this.values[i]}]`);
      } else {
        console.log(`${i}: empty`);
      }
    }
  }
}

// Usage
const quadraticProbingTable = new HashTableWithQuadraticProbing(10);
quadraticProbingTable.set("apple", 5);
quadraticProbingTable.set("banana", 8);
quadraticProbingTable.set("cherry", 3);
quadraticProbingTable.set("date", 1);

console.log(quadraticProbingTable.get("date")); // 1
quadraticProbingTable.display();
```

#### Double Hashing

Double hashing uses a second hash function to determine the probe sequence, further reducing clustering.

```javascript
class HashTableWithDoubleHashing {
  constructor(size = 11) { // Ideally, size should be a prime number
    this.keys = Array(size).fill(null);
    this.values = Array(size).fill(null);
    this.size = size;
    this.count = 0;
  }
  
  // Primary hash function
  hash1(key) {
    let numericKey = typeof key === 'number' ? key : simpleHash(key);
    return numericKey % this.size;
  }
  
  // Secondary hash function
  hash2(key) {
    let numericKey = typeof key === 'number' ? key : simpleHash(key);
    // Secondary hash value should be relatively prime to table size
    // Using a common approach: 1 + (key % (size - 1))
    return 1 + (numericKey % (this.size - 1));
  }
  
  set(key, value) {
    if (this.count >= this.size * 0.7) {
      // If load factor exceeds 0.7, resize and rehash
      this.resize();
    }
    
    let index = this.hash1(key);
    const step = this.hash2(key);
    
    let i = 0;
    while (this.keys[(index + i * step) % this.size] !== null) {
      // If key already exists, update its value
      if (this.keys[(index + i * step) % this.size] === key) {
        this.values[(index + i * step) % this.size] = value;
        return;
      }
      
      i++;
      
      // Safety check to avoid infinite loops
      if (i >= this.size) {
        // If we've tried more positions than the table size, resize
        this.resize();
        return this.set(key, value);
      }
    }
    
    // Found an empty slot
    this.keys[(index + i * step) % this.size] = key;
    this.values[(index + i * step) % this.size] = value;
    this.count++;
  }
  
  get(key) {
    let index = this.hash1(key);
    const step = this.hash2(key);
    
    let i = 0;
    while (this.keys[(index + i * step) % this.size] !== null) {
      if (this.keys[(index + i * step) % this.size] === key) {
        return this.values[(index + i * step) % this.size];
      }
      
      i++;
      
      // If we've tried more positions than the table size, the key is not present
      if (i >= this.size) {
        return undefined;
      }
    }
    
    return undefined;
  }
  
  delete(key) {
    let index = this.hash1(key);
    const step = this.hash2(key);
    
    let i = 0;
    while (this.keys[(index + i * step) % this.size] !== null) {
      if (this.keys[(index + i * step) % this.size] === key) {
        // Mark as deleted
        this.keys[(index + i * step) % this.size] = null;
        this.values[(index + i * step) % this.size] = null;
        this.count--;
        
        // Rehash to maintain the double hashing invariant
        this.rehash();
        return true;
      }
      
      i++;
      
      // If we've tried more positions than the table size, the key is not present
      if (i >= this.size) {
        return false;
      }
    }
    
    return false;
  }
  
  rehash() {
    const oldKeys = this.keys;
    const oldValues = this.values;
    
    this.keys = Array(this.size).fill(null);
    this.values = Array(this.size).fill(null);
    this.count = 0;
    
    // Rehash all existing entries
    for (let i = 0; i < oldKeys.length; i++) {
      if (oldKeys[i] !== null) {
        this.set(oldKeys[i], oldValues[i]);
      }
    }
  }
  
  resize() {
    const oldKeys = this.keys;
    const oldValues = this.values;
    
    // Find the next prime number greater than twice the current size
    this.size = this.nextPrime(this.size * 2);
    this.keys = Array(this.size).fill(null);
    this.values = Array(this.size).fill(null);
    this.count = 0;
    
    // Rehash all existing entries
    for (let i = 0; i < oldKeys.length; i++) {
      if (oldKeys[i] !== null) {
        this.set(oldKeys[i], oldValues[i]);
      }
    }
  }
  
  // Helper method to find the next prime number
  isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    
    return true;
  }
  
  nextPrime(num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  }
  
  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.keys[i] !== null) {
        console.log(`${i}: [${this.keys[i]} => ${this.values[i]}]`);
      } else {
        console.log(`${i}: empty`);
      }
    }
  }
}

// Usage
const doubleHashingTable = new HashTableWithDoubleHashing(11);
doubleHashingTable.set("apple", 5);
doubleHashingTable.set("banana", 8);
doubleHashingTable.set("cherry", 3);
doubleHashingTable.set("date", 1);

console.log(doubleHashingTable.get("apple")); // 5
doubleHashingTable.display();
```

## Hash Tables

Hash tables are data structures that use hash functions to map keys to values, providing efficient lookup, insertion, and deletion operations.

### Hash Table Implementation

A comprehensive JavaScript hash table implementation that combines the best practices:

```javascript
class HashTable {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = Array(initialCapacity).fill().map(() => []);
    this.size = 0;
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
  }
  
  hash(key) {
    if (typeof key === 'number') {
      return this._hashNumber(key);
    } else if (typeof key === 'string') {
      return this._hashString(key);
    } else {
      // For objects, convert to string first
      return this._hashString(JSON.stringify(key));
    }
  }
  
  _hashString(str) {
    let hash = 0;
    // Using the djb2 algorithm
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash) % this.capacity;
  }
  
  _hashNumber(num) {
    // Simple hash for numbers
    return num % this.capacity;
  }
  
  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    // Check if key already exists
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket[i].value = value;
        return;
      }
    }
    
    // Key doesn't exist, add new entry
    bucket.push({ key, value });
    this.size++;
    
    // Check if rehashing is needed
    if (this.size / this.capacity > this.loadFactor) {
      this._rehash();
    }
  }
  
  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        return bucket[i].value;
      }
    }
    
    return undefined;
  }
  
  delete(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    
    return false;
  }
  
  has(key) {
    return this.get(key) !== undefined;
  }
  
  clear() {
    this.buckets = Array(this.capacity).fill().map(() => []);
    this.size = 0;
  }
  
  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        allKeys.push(entry.key);
      }
    }
    return allKeys;
  }
  
  values() {
    const allValues = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        allValues.push(entry.value);
      }
    }
    return allValues;
  }
  
  entries() {
    const allEntries = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        allEntries.push([entry.key, entry.value]);
      }
    }
    return allEntries;
  }
  
  _rehash() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array(this.capacity).fill().map(() => []);
    this.size = 0;
    
    for (const bucket of oldBuckets) {
      for (const entry of bucket) {
        this.set(entry.key, entry.value);
      }
    }
  }
  
  forEach(callback) {
    for (const bucket of this.buckets) {
      for (const entry of bucket) {
        callback(entry.value, entry.key, this);
      }
    }
  }
  
  getSize() {
    return this.size;
  }
  
  isEmpty() {
    return this.size === 0;
  }
}

// Usage example
const hashTable = new HashTable();
hashTable.set("name", "John");
hashTable.set("age", 30);
hashTable.set("city", "New York");

console.log(hashTable.get("name")); // "John"
console.log(hashTable.keys()); // ["name", "age", "city"]
console.log(hashTable.has("city")); // true
hashTable.delete("age");
console.log(hashTable.getSize()); // 2
```

### Operations and Time Complexity

Hash tables provide efficient operations with the following time complexities:

| Operation | Average Time | Worst Time |
|-----------|--------------|------------|
| Insert    | O(1)         | O(n)       |
| Delete    | O(1)         | O(n)       |
| Search    | O(1)         | O(n)       |

The worst-case scenarios occur when there are many collisions, which might happen with a poorly chosen hash function or when the table becomes very full.

### Dynamic Resizing

Hash tables typically implement dynamic resizing to maintain performance as the number of elements grows:

```javascript
// Example of a resize operation (already incorporated in the HashTable class above)
function resize() {
  // Double the size of the hash table
  const newCapacity = this.capacity * 2;
  const newBuckets = Array(newCapacity).fill().map(() => []);
  
  // Rehash all existing entries
  for (const bucket of this.buckets) {
    for (const entry of bucket) {
      const newIndex = this.hash(entry.key) % newCapacity;
      newBuckets[newIndex].push(entry);
    }
  }
  
  this.buckets = newBuckets;
  this.capacity = newCapacity;
}
```

## Load Factor and Rehashing

The load factor is the ratio of occupied slots to the table size. It's a critical factor in hash table performance.

```javascript
class LoadFactorExample {
  constructor() {
    this.hashTable = new HashTable(16, 0.75);
  }
  
  demonstrateLoadFactor() {
    console.log("Initial capacity:", this.hashTable.capacity);
    console.log("Initial load factor:", this.hashTable.size / this.hashTable.capacity);
    
    // Add elements until we trigger rehashing
    for (let i = 0; i < 20; i++) {
      this.hashTable.set(`key${i}`, `value${i}`);
      console.log(`After adding key${i}:`, {
        size: this.hashTable.size,
        capacity: this.hashTable.capacity,
        loadFactor: this.hashTable.size / this.hashTable.capacity
      });
    }
  }
}

// Usage
// const loadFactorDemo = new LoadFactorExample();
// loadFactorDemo.demonstrateLoadFactor();
```

## Specialized Hash Techniques

### Bloom Filters

Bloom filters are probabilistic data structures that test whether an element is a member of a set with possible false positives but no false negatives.

```javascript
class BloomFilter {
  constructor(size = 1000, numHashes = 3) {
    this.size = size;
    this.numHashes = numHashes;
    this.filter = new Array(size).fill(0);
  }
  
  // Simple hash functions
  _hash1(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  
  _hash2(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  
  _getHashValues(key) {
    const hashes = [];
    const h1 = this._hash1(key);
    const h2 = this._hash2(key);
    
    for (let i = 0; i < this.numHashes; i++) {
      // Using the formula: (h1 + i * h2) % size
      hashes.push((h1 + i * h2) % this.size);
    }
    
    return hashes;
  }
  
  add(key) {
    const hashes = this._getHashValues(key);
    for (const hash of hashes) {
      this.filter[hash] = 1;
    }
  }
  
  contains(key) {
    const hashes = this._getHashValues(key);
    for (const hash of hashes) {
      if (this.filter[hash] === 0) {
        return false; // Definitely not in the set
      }
    }
    return true; // Might be in the set (possible false positive)
  }
  
  // Estimate the false positive probability
  estimateFalsePositiveProbability() {
    // Count how many bits are set to 1
    const setBits = this.filter.reduce((count, bit) => count + bit, 0);
    
    // Calculate the probability that a bit is still 0
    const zeroProbability = 1 - (setBits / this.size);
    
    // Calculate false positive probability
    return Math.pow(1 - Math.pow(zeroProbability, this.numHashes), this.numHashes);
  }
}

// Usage
const bloomFilter = new BloomFilter();
bloomFilter.add("apple");
bloomFilter.add("banana");
bloomFilter.add("cherry");

console.log(bloomFilter.contains("apple")); // true
console.log(bloomFilter.contains("grape")); // false (or a false positive)
console.log(bloomFilter.estimateFalsePositiveProbability());
```

### Cuckoo Hashing

Cuckoo hashing uses multiple hash functions and guarantees O(1) worst-case lookup time by allowing elements to be stored in one of several possible locations.

```javascript
class CuckooHashTable {
  constructor(size = 16, maxIterations = 100) {
    this.size = size;
    this.maxIterations = maxIterations;
    this.table1 = Array(size).fill(null);
    this.table2 = Array(size).fill(null);
  }
  
  _hash1(key) {
    // First hash function
    const stringKey = typeof key === 'string' ? key : JSON.stringify(key);
    let hash = 0;
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash * 31 + stringKey.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  
  _hash2(key) {
    // Second hash function (must be different from the first one)
    const stringKey = typeof key === 'string' ? key : JSON.stringify(key);
    let hash = 0;
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash * 17 + stringKey.charCodeAt(i)) % this.size;
    }
    return hash;
  }
  
  set(key, value) {
    // Check if the key already exists in either table
    const pos1 = this._hash1(key);
    const pos2 = this._hash2(key);
    
    if (this.table1[pos1] && this.table1[pos1].key === key) {
      this.table1[pos1].value = value;
      return true;
    }
    
    if (this.table2[pos2] && this.table2[pos2].key === key) {
      this.table2[pos2].value = value;
      return true;
    }
    
    // Try to insert into the first table
    let currentKey = key;
    let currentValue = value;
    
    for (let iteration = 0; iteration < this.maxIterations; iteration++) {
      // Try placing in table 1
      const pos = this._hash1(currentKey);
      
      // If position is empty, place it and we're done
      if (this.table1[pos] === null) {
        this.table1[pos] = { key: currentKey, value: currentValue };
        return true;
      }
      
      // Otherwise, kick out the existing element and try to place it in table 2
      const temp = this.table1[pos];
      this.table1[pos] = { key: currentKey, value: currentValue };
      currentKey = temp.key;
      currentValue = temp.value;
      
      // Try placing the kicked-out element in table 2
      const newPos = this._hash2(currentKey);
      
      if (this.table2[newPos] === null) {
        this.table2[newPos] = { key: currentKey, value: currentValue };
        return true;
      }
      
      // Kick out from table 2 and continue with next iteration
      const temp2 = this.table2[newPos];
      this.table2[newPos] = { key: currentKey, value: currentValue };
      currentKey = temp2.key;
      currentValue = temp2.value;
    }
    
    // If we reach here, we couldn't place the item after max iterations
    // We need to resize or rehash - here we'll just resize
    this._resize();
    
    // Try again with the resized table
    return this.set(currentKey, currentValue);
  }
  
  get(key) {
    const pos1 = this._hash1(key);
    const pos2 = this._hash2(key);
    
    if (this.table1[pos1] && this.table1[pos1].key === key) {
      return this.table1[pos1].value;
    }
    
    if (this.table2[pos2] && this.table2[pos2].key === key) {
      return this.table2[pos2].value;
    }
    
    return undefined;
  }
  
  delete(key) {
    const pos1 = this._hash1(key);
    const pos2 = this._hash2(key);
    
    if (this.table1[pos1] && this.table1[pos1].key === key) {
      this.table1[pos1] = null;
      return true;
    }
    
    if (this.table2[pos2] && this.table2[pos2].key === key) {
      this.table2[pos2] = null;
      return true;
    }
    
    return false;
  }
  
  _resize() {
    // Collect all existing entries
    const entries = [];
    
    for (const item of this.table1) {
      if (item !== null) {
        entries.push(item);
      }
    }
    
    for (const item of this.table2) {
      if (item !== null) {
        entries.push(item);
      }
    }
    
    // Double the size
    this.size *= 2;
    this.table1 = Array(this.size).fill(null);
    this.table2 = Array(this.size).fill(null);
    
    // Reinsert all entries
    for (const { key, value } of entries) {
      // Set without using the current set method to avoid infinite recursion
      const pos1 = this._hash1(key);
      this.table1[pos1] = { key, value };
    }
  }
  
  display() {
    console.log("Table 1:");
    for (let i = 0; i < this.table1.length; i++) {
      if (this.table1[i] !== null) {
        console.log(`  ${i}: [${this.table1[i].key} => ${this.table1[i].value}]`);
      }
    }
    
    console.log("Table 2:");
    for (let i = 0; i < this.table2.length; i++) {
      if (this.table2[i] !== null) {
        console.log(`  ${i}: [${this.table2[i].key} => ${this.table2[i].value}]`);
      }
    }
  }
}

// Usage
const cuckooTable = new CuckooHashTable();
cuckooTable.set("apple", 5);
cuckooTable.set("banana", 8);
cuckooTable.set("cherry", 3);

console.log(cuckooTable.get("banana")); // 8
cuckooTable.display();
```

### Consistent Hashing

Consistent hashing is used in distributed systems to minimize reorganization when nodes are added or removed.

```javascript
class ConsistentHashing {
  constructor(nodes = [], replicas = 3) {
    this.replicas = replicas;
    this.ring = {};
    this.keys = [];
    
    for (const node of nodes) {
      this.addNode(node);
    }
  }
  
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * 31 + key.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }
  
  addNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const key = `${node}:${i}`;
      const hashValue = this._hash(key);
      this.ring[hashValue] = node;
      this.keys.push(hashValue);
    }
    
    // Sort the keys in ascending order
    this.keys.sort((a, b) => a - b);
  }
  
  removeNode(node) {
    for (let i = 0; i < this.replicas; i++) {
      const key = `${node}:${i}`;
      const hashValue = this._hash(key);
      delete this.ring[hashValue];
      this.keys = this.keys.filter(k => k !== hashValue);
    }
  }
  
  getNode(key) {
    if (this.keys.length === 0) {
      return null;
    }
    
    const hash = this._hash(key);
    
    // Find the first node with a position >= hash
    for (const ringKey of this.keys) {
      if (hash <= ringKey) {
        return this.ring[ringKey];
      }
    }
    
    // If we reach here, it means the hash is greater than all nodes,
    // so we wrap around to the first node
    return this.ring[this.keys[0]];
  }
  
  displayRing() {
    console.log("Ring structure:");
    for (const key of this.keys) {
      console.log(`  ${key}: ${this.ring[key]}`);
    }
  }
}

// Usage
const ch = new ConsistentHashing(["node1", "node2", "node3"]);
console.log(ch.getNode("apple")); // Returns a node name
console.log(ch.getNode("banana")); // Returns a node name

// Add a new node
ch.addNode("node4");
console.log(ch.getNode("apple")); // Might be the same or different
console.log(ch.getNode("banana")); // Might be the same or different

ch.displayRing();
```

### Extendible Hashing

Extendible hashing is used in database systems for dynamic hash tables that grow and shrink as needed.

```javascript
class ExtendibleHashingBucket {
  constructor(depth = 1, size = 4) {
    this.localDepth = depth;
    this.size = size;
    this.items = [];
  }
  
  isFull() {
    return this.items.length >= this.size;
  }
  
  insert(key, value) {
    if (!this.isFull()) {
      // Check if the key already exists
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].key === key) {
          this.items[i].value = value;
          return true;
        }
      }
      
      this.items.push({ key, value });
      return true;
    }
    return false;
  }
  
  get(key) {
    for (const item of this.items) {
      if (item.key === key) {
        return item.value;
      }
    }
    return undefined;
  }
  
  delete(key) {
    const index = this.items.findIndex(item => item.key === key);
    if (index !== -1) {
      this.items.splice(index, 1);
      return true;
    }
    return false;
  }
  
  getItems() {
    return this.items;
  }
}

class ExtendibleHashingDirectory {
  constructor(initialGlobalDepth = 1, bucketSize = 4) {
    this.globalDepth = initialGlobalDepth;
    this.bucketSize = bucketSize;
    this.directory = [];
    
    // Create initial buckets
    for (let i = 0; i < (1 << initialGlobalDepth); i++) {
      this.directory[i] = new ExtendibleHashingBucket(initialGlobalDepth, bucketSize);
    }
  }
  
  _hash(key) {
    // Get a numeric hash value for the key
    if (typeof key === 'number') {
      return key;
    }
    
    const stringKey = typeof key === 'string' ? key : JSON.stringify(key);
    let hash = 0;
    for (let i = 0; i < stringKey.length; i++) {
      hash = (hash * 31 + stringKey.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }
  
  _getBucketIndex(key) {
    const hashValue = this._hash(key);
    // Use only the relevant bits for global depth
    return hashValue & ((1 << this.globalDepth) - 1);
  }
  
  insert(key, value) {
    let bucketIndex = this._getBucketIndex(key);
    let bucket = this.directory[bucketIndex];
    
    // If the bucket has space, just insert
    if (bucket.insert(key, value)) {
      return true;
    }
    
    // If the bucket is full, we need to split it
    this._splitBucket(bucketIndex);
    
    // After splitting, try insert again
    return this.insert(key, value);
  }
  
  _splitBucket(bucketIndex) {
    let bucket = this.directory[bucketIndex];
    
    // If local depth equals global depth, we need to double the directory
    if (bucket.localDepth === this.globalDepth) {
      this._doubleDirectory();
    }
    
    // Increase the local depth of the bucket
    bucket.localDepth++;
    
    // Create a new bucket with the same local depth
    const newBucket = new ExtendibleHashingBucket(bucket.localDepth, this.bucketSize);
    
    // Rehash all items in the old bucket
    const oldItems = bucket.getItems();
    bucket.items = [];
    
    // Update directory pointers for the new bucket
    const localMask = 1 << (bucket.localDepth - 1);
    const newBucketIndex = bucketIndex | localMask;
    
    // Update all pointers in the directory that should point to the new bucket
    for (let i = 0; i < this.directory.length; i++) {
      if ((i & ((1 << bucket.localDepth) - 1)) === (newBucketIndex & ((1 << bucket.localDepth) - 1))) {
        this.directory[i] = newBucket;
      }
    }
    
    // Reinsert all items
    for (const { key, value } of oldItems) {
      const index = this._getBucketIndex(key);
      this.directory[index].insert(key, value);
    }
  }
  
  _doubleDirectory() {
    const oldSize = this.directory.length;
    
    // Double the directory
    for (let i = 0; i < oldSize; i++) {
      this.directory[i + oldSize] = this.directory[i];
    }
    
    this.globalDepth++;
  }
  
  get(key) {
    const bucketIndex = this._getBucketIndex(key);
    return this.directory[bucketIndex].get(key);
  }
  
  delete(key) {
    const bucketIndex = this._getBucketIndex(key);
    return this.directory[bucketIndex].delete(key);
  }
  
  display() {
    console.log(`Global Depth: ${this.globalDepth}`);
    
    const visitedBuckets = new Set();
    
    for (let i = 0; i < this.directory.length; i++) {
      const bucket = this.directory[i];
      
      // Avoid printing the same bucket multiple times
      if (!visitedBuckets.has(bucket)) {
        visitedBuckets.add(bucket);
        console.log(`Bucket at index ${i} (local depth: ${bucket.localDepth}):`);
        for (const item of bucket.items) {
          console.log(`  ${item.key}: ${item.value}`);
        }
      }
    }
  }
}

// Usage
const extendibleHashTable = new ExtendibleHashingDirectory(1, 2);
extendibleHashTable.insert("apple", 5);
extendibleHashTable.insert("banana", 8);
extendibleHashTable.insert("cherry", 3);
extendibleHashTable.insert("date", 1);
extendibleHashTable.insert("elderberry", 9);

console.log(extendibleHashTable.get("banana")); // 8
extendibleHashTable.display();
```

## Applications of Hashing

### Dictionaries and Maps

JavaScript's built-in Map object uses hashing internally:

```javascript
// Built-in JavaScript Map example
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");

console.log(map.get("name")); // "John"
console.log(map.has("city")); // true
console.log(map.size); // 3

map.delete("age");
console.log(map.size); // 2

// Iteration
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
```

### Database Indexing

Hashing is used in database systems for fast record retrieval:

```javascript
class SimpleDatabase {
  constructor() {
    this.data = [];
    this.primaryIndex = new HashTable();
    this.secondaryIndices = {};
  }
  
  insert(record) {
    this.data.push(record);
    const id = record.id;
    this.primaryIndex.set(id, this.data.length - 1);
    
    // Update secondary indices
    for (const indexName in this.secondaryIndices) {
      const field = indexName;
      if (record[field] !== undefined) {
        this.secondaryIndices[field].set(record[field], id);
      }
    }
  }
  
  createIndex(field) {
    if (!this.secondaryIndices[field]) {
      this.secondaryIndices[field] = new HashTable();
      
      // Populate the index with existing data
      for (let i = 0; i < this.data.length; i++) {
        const record = this.data[i];
        if (record[field] !== undefined) {
          this.secondaryIndices[field].set(record[field], record.id);
        }
      }
    }
  }
  
  findById(id) {
    const index = this.primaryIndex.get(id);
    if (index !== undefined) {
      return this.data[index];
    }
    return null;
  }
  
  findBy(field, value) {
    if (field === 'id') {
      return this.findById(value);
    }
    
    if (this.secondaryIndices[field]) {
      const id = this.secondaryIndices[field].get(value);
      if (id !== undefined) {
        return this.findById(id);
      }
    } else {
      // Sequential scan if no index exists
      for (const record of this.data) {
        if (record[field] === value) {
          return record;
        }
      }
    }
    
    return null;
  }
}

// Usage
const db = new SimpleDatabase();

db.insert({ id: 1, name: "John", age: 30, city: "New York" });
db.insert({ id: 2, name: "Alice", age: 25, city: "Boston" });
db.insert({ id: 3, name: "Bob", age: 35, city: "Chicago" });

// Create an index on the 'name' field
db.createIndex('name');

console.log(db.findById(2)); // { id: 2, name: "Alice", age: 25, city: "Boston" }
console.log(db.findBy('name', 'Bob')); // { id: 3, name: "Bob", age: 35, city: "Chicago" }
```

### Caching

Hashing is fundamental for implementing caching mechanisms:

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    
    // Get the value and refresh its position (move to the end)
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    
    return value;
  }
  
  put(key, value) {
    // If key exists, remove it first to update its position
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    // If at capacity, remove the least recently used item (first item)
    else if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    // Add the new item
    this.cache.set(key, value);
  }
}

// Usage
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3); // Evicts key 2
console.log(cache.get(2)); // -1 (not found)
cache.put(4, 4); // Evicts key 1
console.log(cache.get(1)); // -1 (not found)
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4
```

### String Matching

Hashing enables efficient string matching algorithms like Rabin-Karp:

```javascript
function rabinKarp(text, pattern) {
  const BASE = 256;
  const MOD = 101; // A prime number
  const patternLength = pattern.length;
  const textLength = text.length;
  
  if (patternLength > textLength) return [];
  
  // Pre-compute BASE^(patternLength-1) for rolling hash
  let highestPower = 1;
  for (let i = 0; i < patternLength - 1; i++) {
    highestPower = (highestPower * BASE) % MOD;
  }
  
  // Compute initial hash values
  let patternHash = 0;
  let textHash = 0;
  
  for (let i = 0; i < patternLength; i++) {
    patternHash = (BASE * patternHash + pattern.charCodeAt(i)) % MOD;
    textHash = (BASE * textHash + text.charCodeAt(i)) % MOD;
  }
  
  const matches = [];
  
  // Slide pattern over text, check hash matches
  for (let i = 0; i <= textLength - patternLength; i++) {
    // Check if hashes match
    if (patternHash === textHash) {
      // Verify character by character to avoid hash collisions
      let match = true;
      for (let j = 0; j < patternLength; j++) {
        if (pattern[j] !== text[i + j]) {
          match = false;
          break;
        }
      }
      if (match) {
        matches.push(i);
      }
    }
    
    // Calculate rolling hash for next window
    if (i < textLength - patternLength) {
      // Remove leading character and add trailing character
      textHash = (BASE * (textHash - text.charCodeAt(i) * highestPower) + text.charCodeAt(i + patternLength)) % MOD;
      
      // Handle negative values
      if (textHash < 0) {
        textHash += MOD;
      }
    }
  }
  
  return matches;
}

// Example usage
const text = "AABAACAADAABAABA";
const pattern = "AABA";
console.log(rabinKarp(text, pattern)); // [0, 9, 12]
```

Rabin-Karp efficiently finds all occurrences of a pattern in a text by using a rolling hash function.

## Performance Analysis

### Time Complexity

Hash table operations have different time complexities depending on implementation:

| Implementation | Average Case (Insert/Delete/Search) | Worst Case (Insert/Delete/Search) |
|----------------|-------------------------------------|-----------------------------------|
| Separate Chaining | O(1 + α) where α is load factor | O(n) |
| Linear Probing | O(1 / (1 - α)) | O(n) |
| Quadratic Probing | O(1 / (1 - α)) | O(n) |
| Double Hashing | O(1 / (1 - α)) | O(n) |

The performance degrades as the load factor increases. For optimal performance:
- Keep load factor below 0.7 for separate chaining
- Keep load factor below 0.5 for open addressing

A good hash function minimizes collisions, which directly impacts performance.

### Space Complexity

The space complexity of hash tables depends on the implementation:

| Implementation | Space Complexity |
|----------------|------------------|
| Separate Chaining | O(n + m) where n is number of elements and m is table size |
| Open Addressing | O(m) where m is table size |

Since hash tables need to maintain a reasonably low load factor, they typically use more memory than strictly necessary for just storing the elements. The actual space overhead varies by implementation:

- Open addressing typically uses 1.5-2x the space needed for the data itself
- Separate chaining has additional overhead for pointers/references in linked lists

### Choosing the Right Hash Function

Selecting an appropriate hash function depends on the application's requirements:

1. **General-purpose hash tables**:
   - Simple hash functions like multiplication or division method
   - Focus on speed and uniform distribution

2. **Cryptographic applications**:
   - Secure hash functions (SHA-256, BLAKE3)
   - Focus on security properties (collision resistance, pre-image resistance)

3. **String-heavy applications**:
   - Rolling hash functions (FNV, MurmurHash)
   - Account for string patterns and character distributions

4. **Numeric keys**:
   - Identity or simple arithmetic operations
   - Multiplication method often works well

5. **Object keys**:
   - Combine hashes of object properties
   - Consider object identity vs. structural equality

JavaScript's native `Map` and `Set` objects use sophisticated hashing internally, making them preferable to custom implementations for most applications.

## JavaScript Use Cases

### Building Custom Map Implementations

While JavaScript provides built-in `Map` objects, custom implementations can offer specialized features:

```javascript
class CustomMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.buckets = Array(initialCapacity).fill().map(() => []);
    this.size = 0;
    this.loadFactor = loadFactor;
    this.threshold = Math.floor(initialCapacity * loadFactor);
  }

  _hash(key) {
    // Convert key to string and hash it
    const str = String(key);
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0; // Convert to 32-bit integer
    }
    return Math.abs(hash) % this.buckets.length;
  }

  set(key, value) {
    if (this.size >= this.threshold) {
      this._resize();
    }

    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    // Check if key already exists
    for (let i = 0; i < bucket.length; i++) {
      if (this._keysEqual(bucket[i][0], key)) {
        bucket[i][1] = value;
        return this;
      }
    }
    
    // Add new key-value pair
    bucket.push([key, value]);
    this.size++;
    return this;
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (this._keysEqual(bucket[i][0], key)) {
        return bucket[i][1];
      }
    }
    
    return undefined;
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (this._keysEqual(bucket[i][0], key)) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    
    return false;
  }

  has(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    
    for (let i = 0; i < bucket.length; i++) {
      if (this._keysEqual(bucket[i][0], key)) {
        return true;
      }
    }
    
    return false;
  }

  clear() {
    this.buckets = Array(this.buckets.length).fill().map(() => []);
    this.size = 0;
    return this;
  }

  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        result.push(key);
      }
    }
    return result;
  }

  values() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        result.push(value);
      }
    }
    return result;
  }

  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        result.push([key, value]);
      }
    }
    return result;
  }

  forEach(callback) {
    for (const bucket of this.buckets) {
      for (const [key, value] of bucket) {
        callback(value, key, this);
      }
    }
  }

  _keysEqual(key1, key2) {
    // Handle special cases like NaN
    if (Number.isNaN(key1) && Number.isNaN(key2)) return true;
    return key1 === key2;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.buckets = Array(oldBuckets.length * 2).fill().map(() => []);
    this.threshold = Math.floor(this.buckets.length * this.loadFactor);
    this.size = 0;
    
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}
```

Custom maps can support:
- Special key equality semantics
- Custom iteration orders
- Advanced metrics and statistics
- Specialized memory optimizations

### Implementing Sets

Sets are collections of unique values that can be efficiently implemented using hash tables:

```javascript
class CustomSet {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.map = new CustomMap(initialCapacity, loadFactor);
  }

  add(value) {
    this.map.set(value, true);
    return this;
  }

  has(value) {
    return this.map.has(value);
  }

  delete(value) {
    return this.map.delete(value);
  }

  clear() {
    this.map.clear();
    return this;
  }

  get size() {
    return this.map.size;
  }

  values() {
    return this.map.keys();
  }

  forEach(callback) {
    this.map.forEach((_, value) => callback(value, value, this));
  }

  // Set operations
  union(otherSet) {
    const result = new CustomSet();
    this.forEach(value => result.add(value));
    otherSet.forEach(value => result.add(value));
    return result;
  }

  intersection(otherSet) {
    const result = new CustomSet();
    this.forEach(value => {
      if (otherSet.has(value)) {
        result.add(value);
      }
    });
    return result;
  }

  difference(otherSet) {
    const result = new CustomSet();
    this.forEach(value => {
      if (!otherSet.has(value)) {
        result.add(value);
      }
    });
    return result;
  }

  isSubsetOf(otherSet) {
    if (this.size > otherSet.size) return false;
    
    let isSubset = true;
    this.forEach(value => {
      if (!otherSet.has(value)) {
        isSubset = false;
      }
    });
    
    return isSubset;
  }
}
```

Set operations benefit significantly from hash-based lookups:
- Union, intersection, and difference operations can be performed in O(n + m) time
- Subset checking can be performed in O(n) time (where n is the size of the smaller set)

### Memoization and Caching

Hashing enables efficient memoization by storing function results based on input parameters:

```javascript
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    // Create a unique key representing the function arguments
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example: Recursive Fibonacci with memoization
const fibonacci = memoize(function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.time('Fibonacci 40');
console.log(fibonacci(40)); // Fast!
console.timeEnd('Fibonacci 40');
```

For more complex caching needs, a LRU (Least Recently Used) cache can be implemented using a combination of hash table and linked list:

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = { next: null, prev: null };
    this.tail = { next: null, prev: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    
    // Move accessed node to the front
    const node = this.map.get(key);
    this._removeNode(node);
    this._addToFront(node);
    
    return node.value;
  }

  put(key, value) {
    // If key exists, update and move to front
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._removeNode(node);
      this._addToFront(node);
      return;
    }
    
    // If at capacity, remove least recently used item
    if (this.map.size === this.capacity) {
      const lruNode = this.tail.prev;
      this._removeNode(lruNode);
      this.map.delete(lruNode.key);
    }
    
    // Add new node to front
    const newNode = { key, value, next: null, prev: null };
    this._addToFront(newNode);
    this.map.set(key, newNode);
  }

  _removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  _addToFront(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
}
```

LRU caches are useful for:
- Browser caches
- Database query caches
- API result caching
- In-memory data stores with limited capacity

## Common Interview Problems

Here are some common hash table-related interview problems and their solutions:

### 1. Two Sum

**Problem**: Given an array of integers and a target sum, find the indices of two numbers that add up to the target.

**Solution**:
```javascript
function twoSum(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return null;
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
```

Time complexity: O(n)
Space complexity: O(n)

### 2. Group Anagrams

**Problem**: Group strings that are anagrams of each other.

**Solution**:
```javascript
function groupAnagrams(strs) {
  const map = new Map();
  
  for (const str of strs) {
    // Create a unique key for each anagram group
    const key = str.split('').sort().join('');
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    
    map.get(key).push(str);
  }
  
  return Array.from(map.values());
}

// Example
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

Time complexity: O(n * k log k) where n is the number of strings and k is the max length of a string
Space complexity: O(n * k)

### 3. Longest Substring Without Repeating Characters

**Problem**: Find the length of the longest substring without repeating characters.

**Solution**:
```javascript
function lengthOfLongestSubstring(s) {
  const charMap = new Map();
  let start = 0;
  let maxLength = 0;
  
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    
    if (charMap.has(char) && charMap.get(char) >= start) {
      start = charMap.get(char) + 1;
    }
    
    charMap.set(char, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  return maxLength;
}

// Example
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
```

Time complexity: O(n)
Space complexity: O(min(m, n)) where m is the size of the character set

### 4. First Unique Character in a String

**Problem**: Find the first non-repeating character in a string.

**Solution**:
```javascript
function firstUniqChar(s) {
  const charCount = new Map();
  
  // Count character frequencies
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  
  // Find first character with count 1
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }
  
  return -1;
}

// Example
console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2
```

Time complexity: O(n)
Space complexity: O(1) - limited to the size of the character set

### 5. Implement LRU Cache

**Problem**: Design and implement a data structure for an LRU (Least Recently Used) cache.

**Solution**: Already covered in the Memoization and Caching section.

### 6. Valid Sudoku

**Problem**: Determine if a 9x9 Sudoku board is valid.

**Solution**:
```javascript
function isValidSudoku(board) {
  // Check rows
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') continue;
      if (rowSet.has(board[i][j])) return false;
      rowSet.add(board[i][j]);
    }
  }
  
  // Check columns
  for (let j = 0; j < 9; j++) {
    const colSet = new Set();
    for (let i = 0; i < 9; i++) {
      if (board[i][j] === '.') continue;
      if (colSet.has(board[i][j])) return false;
      colSet.add(board[i][j]);
    }
  }
  
  // Check 3x3 sub-boxes
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const boxSet = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const row = boxRow * 3 + i;
          const col = boxCol * 3 + j;
          if (board[row][col] === '.') continue;
          if (boxSet.has(board[row][col])) return false;
          boxSet.add(board[row][col]);
        }
      }
    }
  }
  
  return true;
}
```

Time complexity: O(1) - fixed size of 9x9
Space complexity: O(1) - fixed size of 9x9

### 7. Design a HashMap

**Problem**: Design a HashMap without using any built-in hash table libraries.

**Solution**: Already covered in the Building Custom Map Implementations section.

### 8. Implement a TimeMap

**Problem**: Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve a value based on a key and timestamp.

**Solution**:
```javascript
class TimeMap {
  constructor() {
    this.map = new Map();
  }
  
  set(key, value, timestamp) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    
    this.map.get(key).push({ timestamp, value });
  }
  
  get(key, timestamp) {
    if (!this.map.has(key)) return "";
    
    const values = this.map.get(key);
    
    // Binary search to find the largest timestamp <= given timestamp
    let left = 0;
    let right = values.length - 1;
    let result = "";
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      
      if (values[mid].timestamp <= timestamp) {
        result = values[mid].value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return result;
  }
}

// Example
const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1)); // "bar"
console.log(timeMap.get("foo", 3)); // "bar"
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4)); // "bar2"
console.log(timeMap.get("foo", 5)); // "bar2"
```

Time complexity: 
- set: O(1)
- get: O(log n) where n is the number of values for a specific key

Space complexity: O(n) where n is the total number of key-value-timestamp entries

These interview problems demonstrate the versatility and power of hash tables in solving a wide range of computational problems efficiently.
