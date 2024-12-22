const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.[contenthash].js", // nama file output
		clean: true, // membersihkan file sebelum di compile
	},
});
