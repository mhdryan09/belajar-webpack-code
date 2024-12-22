# Webpack Custom Configuration

Kita bisa membuat custom configurasi pada webpack dengan membuat file `webpack.config.js` dan kunjungi dokumentasi dari webpack https://webpack.js.org/

```javascript
const path = require("path");

module.exports = {
	mode: "development", // Mode pengembangan
	entry: "./src/index.js", // Titik awal dari aplikasi kita
	output: {
		path: path.resolve(__dirname, "output"), // Direktori tempat file hasil bundling akan disimpan
		filename: "bundle.js", // Nama file hasil bundling
	},
	watch: true, // Memantau perubahan file secara otomatis dan melakukan bundling ulang
	devtool: false, // Tidak menggunakan source map untuk debugging
};
```

## Penjelasan:

- mode: Menentukan mode pengembangan untuk mendapatkan fitur-fitur yang membantu saat mengembangkan aplikasi.
- entry: Menentukan file utama yang akan dijadikan titik awal untuk proses bundling.
- output: Mengatur lokasi dan nama file hasil bundling.
- watch: Mengaktifkan fitur untuk memantau perubahan pada file dan melakukan bundling ulang secara otomatis.
- devtool: Menonaktifkan source map yang biasanya digunakan untuk debugging.
