# 🎯 **Day 9 – Medium String Algorithms**

### 🧩 **Core Concept Focus**

- Sliding window problems
- Substring search
- Window expansion & contraction
- Character frequency maps

---

# 🏫 **Class Questions**

---

### **1️⃣ Find if One String Is a Substring of Another (Manual Method)**

- **Input:**
  Main string: `"hellothere"`
  Target string: `"there"`

- **Output:**
  `true`
  ✨ _Manual parsing only; check character by character without using `includes`, or `indexOf`._

---

### **2️⃣ Manual Substring Search (Without Using indexOf)**

- **Input:** text = `"hello world"`, pattern = `"wor"`
- **Output:** `Found at index 6`
  ✨ _Classic naive pattern matching algorithm (two nested loops)._

---

### **3️⃣ Check if One String is Rotation of Another**

- **Input:** `"abcde"`, `"cdeab"`
- **Output:** `Rotation`
  ✨ _Use the trick: second string must be inside `(s1 + s1)`._

---

# 🏠 **Homework Questions**

---

### **1️⃣ Count Frequency of Each Word in a Sentence**

- **Input:** `"i love coding and i love javascript"`
- **Output:** `{ i:2, love:2, coding:1, and:1, javascript:1 }`
  ✨ _Word parsing + map building._

---

### **2️⃣ Check If a String Is a Pangram**

- **Input:** `"The quick brown fox jumps over the lazy dog"`
- **Output:** `Pangram`
  ✨ _Check if all 26 letters exist._

---

### **3️⃣ Remove All Duplicate Words From a Sentence**

- **Input:** `"this is is a test test string"`
- **Output:** `"this is a test string"`
  ✨ _Track seen words, build cleaned sentence._

