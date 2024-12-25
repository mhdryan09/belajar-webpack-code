# Code Splitting

Code splitting adalah teknik dalam pengembangan web yang digunakan untuk membagi kode aplikasi menjadi beberapa bagian yang lebih kecil dan dapat dimuat sesuai kebutuhan. Ini membantu meningkatkan performa aplikasi dengan mengurangi ukuran file yang harus dimuat pada awalnya.

## Analogi Sederhana

Bayangkan Anda memiliki sebuah buku besar yang berisi semua informasi yang Anda butuhkan. Jika Anda harus membawa seluruh buku itu ke mana-mana, itu akan sangat berat dan tidak praktis. Sebagai gantinya, Anda bisa membagi buku itu menjadi beberapa bab dan hanya membawa bab yang Anda butuhkan saat itu. Dengan cara ini, Anda tidak perlu membawa seluruh buku, hanya bagian yang relevan.

Dalam konteks aplikasi web, code splitting bekerja dengan cara yang sama. Alih-alih memuat seluruh kode aplikasi sekaligus, Anda hanya memuat bagian-bagian yang diperlukan saat itu. Misalnya, jika pengguna hanya mengakses halaman beranda, maka hanya kode untuk halaman beranda yang dimuat. Jika mereka berpindah ke halaman lain, kode untuk halaman tersebut baru akan dimuat.

## Pendekatan Umum pada Code Splitting

1. Entry Points

   - Anda dapat mendefinisikan beberapa titik masuk (entry points) dalam konfigurasi build Anda. Setiap entry point akan menghasilkan bundel terpisah. Misalnya, Anda dapat memiliki entry point untuk halaman utama dan entry point lain untuk halaman admin.

2. Prevent Duplication

   - Pendekatan ini bertujuan untuk mencegah duplikasi kode dengan mengekstrak modul yang digunakan bersama ke dalam bundel terpisah. Ini memastikan bahwa modul yang sama tidak dimuat lebih dari sekali, mengurangi ukuran total bundel dan meningkatkan efisiensi.

3. Dynamic Imports
   - Dengan menggunakan fitur import() dari JavaScript, Anda dapat memuat modul secara dinamis hanya ketika diperlukan. Ini sangat berguna untuk fitur atau halaman yang jarang diakses, karena kode untuk fitur tersebut tidak akan dimuat sampai benar-benar dibutuhkan.

Dengan menggunakan code splitting, Anda dapat mengoptimalkan performa aplikasi Anda dan memberikan pengalaman pengguna yang lebih baik.

## Tilt JS

Library untuk mekakukan efek animasi terhadap gambar

### Lodash

Lodash adalah sebuah library JavaScript yang menyediakan berbagai utilitas untuk mempermudah pengembangan aplikasi. Library ini memiliki banyak fungsi yang berguna untuk manipulasi array, objek, string, dan tipe data lainnya. Dengan menggunakan Lodash, Anda dapat menulis kode yang lebih bersih dan efisien.

#### Kegunaan Lodash

1. **Manipulasi Array dan Objek**: Lodash menyediakan berbagai metode untuk memanipulasi array dan objek, seperti `map`, `filter`, `reduce`, `cloneDeep`, dan banyak lagi.
2. **Fungsi Utility**: Lodash memiliki banyak fungsi utility yang membantu dalam penulisan kode, seperti `debounce`, `throttle`, `memoize`, dan `once`.
3. **Pengelolaan Koleksi Data**: Dengan Lodash, Anda dapat dengan mudah mengelola dan memproses koleksi data, baik itu array atau objek.
4. **Kompatibilitas Browser**: Lodash dirancang untuk bekerja di berbagai lingkungan JavaScript, termasuk browser lama yang mungkin tidak mendukung fitur modern.

Dengan menggunakan Lodash, Anda dapat menghemat waktu dan usaha dalam menulis fungsi-fungsi umum yang sering digunakan dalam pengembangan aplikasi.

## SplitChunksPlugin

SplitChunksPlugin adalah plugin di Webpack yang digunakan untuk mengoptimalkan pembagian kode (code splitting) dalam aplikasi JavaScript. Code splitting adalah teknik yang memecah kode aplikasi menjadi beberapa bundel yang lebih kecil, yang dapat dimuat secara dinamis saat dibutuhkan. Ini membantu meningkatkan performa aplikasi dengan mengurangi ukuran bundel awal yang harus dimuat oleh browser.

```javascript
module.exports = {
	// ...existing code...
	optimization: {
		splitChunks: {
			chunks: "all",
		},
	},
	// ...existing code...
};
```

Dalam contoh ini, opsi chunks: 'all' akan memberitahu Webpack untuk memecah semua jenis chunk (baik sinkron maupun asinkron) menjadi bundel terpisah. Anda dapat menyesuaikan konfigurasi ini lebih lanjut sesuai kebutuhan aplikasi Anda
