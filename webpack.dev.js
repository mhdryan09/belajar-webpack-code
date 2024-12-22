const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
	mode: "development", // mode development
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js", // nama file output
		clean: true, // membersihkan file sebelum di compile
	},
	watch: true, // memantau perubahan file secara otomatis
});
