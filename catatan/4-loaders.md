## Style Loader

Style Loader memungkinkan Anda untuk memasukkan file CSS ke dalam JavaScript dan menyertakannya dalam bundle. Biasanya digunakan bersama dengan `css-loader`.

### Contoh Penggunaan

```javascript
// webpack.config.js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
```

## Babel Loader

Babel Loader biasanya digunakan ketika kita mau membuat file hasil bundle bisa di-support oleh browser versi yang lama. Ini karena kemungkinan kodingan yang kita buat adalah kode JavaScript versi terbaru (ES6+).

### Contoh Penggunaan

```javascript
// webpack.config.js
module.exports = {
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env"]],
					},
				},
			},
		],
	},
};
```

## Sass Loader

Sass Loader digunakan untuk mengubah file Sass/SCSS menjadi CSS. Ini memungkinkan Anda untuk menggunakan fitur-fitur Sass seperti variabel, nested rules, dan mixins dalam proyek Anda.

### Contoh Penggunaan

```javascript
// webpack.config.js
module.exports = {
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
};
```

## Bootstrap

Bootstrap adalah framework CSS yang membantu dalam membuat desain responsif dan komponen UI yang konsisten. Ini mempercepat pengembangan front-end dengan menyediakan komponen siap pakai seperti grid system, buttons, forms, dan lainnya.

### Contoh Penggunaan

```scss
// style.scss
@import "~bootstrap/scss/bootstrap";

// Menggunakan variabel dan mixin dari Bootstrap
body {
	@include media-breakpoint-up(md) {
		background-color: $primary;
	}
}
```
