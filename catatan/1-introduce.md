# Javascript Module System

## Alasan penggunaan adanya Module System

1. Reusability
   - Modul bisa digunakan kembali oleh bagian program lain, atau bisa menjadi package untuk app lain.

2. Isolation
   - Satu modul mengerjakan hanya yang spesifik saja.

3. Organization
   - Kemudahan pengelolaan aplikasi secara keseluruhan.

---

## Module System pada Javascript

- 1995 - 2000 : No Module System
- 2000 - 1010 : IIFE (Immediately Invoked Function Expression)
- 2010 - 2015 : CommonJS & NodeJS
- 2015 - Sekarang : ES6 Modules

## No Modules

### Sebelum ada module

- Harus membuat fungsi pembungkus / wrapper function
- Agar memiliki scope, sehingga tidak ada global variable
- Tetap muncul function wrapper yang bisa diakses secara global
- Kurang reusable
- Masalah pengelolaan dependency

---

## IIFE

### Immediately Invoked Function Expression

- Tidak perlu membuat nama function
- Tidak perlu menjalankan function
- Tidak ada function yang bisa diakses secara global
- Harus ditulis di setiap module
- Masih bukan module system

## Contoh IIFE

```javascript
(function () {
	// Kode di dalam IIFE
	var message = "Hello, World!";
	console.log(message);
})();
```

---

## CommonJS

### Module formatting system

- Menggunakan keyword `module.exports` dan `require()`
- Di terapkan di dalam nodejs
- Butuh `module bundler` jika ingin dijalankan di browser
- Dijalankan secara Syncrhonous

---

## ES6 (EcmaScript Harmony)

- Menggunakan keyword `exports` dan `import`
- Dijalankan secar Asyncrhonous
- Tidak butuh module bundler jika ingin dijalankan di browser
- Tambahkan `type='module'` saat pemanggilan script

## Contoh ES6

### File `math.js`

```javascript
export function add(a, b) {
	return a + b;
}

export function subtract(a, b) {
	return a - b;
}
```

### File `app.js`

```javascript
import { add, subtract } from "./math.js";

const sum = add(5, 3);
const difference = subtract(5, 3);

console.log("Sum:", sum);
console.log("Difference:", difference);
```

---
