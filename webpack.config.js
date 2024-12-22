const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js", // titik awal dari aplikasi kita
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	watch: true, // memantau perubahan file secara otomatis
	devtool: false, // tidak menggunakan source map
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
