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
};
