const path = require("path");

module.exports = {
	mode: "development", // mode development
	entry: "./src/index.js", // titik awal dari aplikasi kita
	output: {
		path: path.resolve(__dirname, "output"), // direktori output
		filename: "bundle.js", // nama file output
	},
	watch: true, // memantau perubahan file secara otomatis
	devtool: false, // tidak menggunakan source map
	module: {
		rules: [
			// {
			// 	test: /\.css$/i, // file yang akan di compile adalah file css
			// 	use: ["style-loader", "css-loader"], // style loader untuk memasukkan css ke dalam file html, css loader untuk mengcompile css
			// },
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
