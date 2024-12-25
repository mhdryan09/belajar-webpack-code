const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
	mode: "development", // mode development
	devServer: {
		static: {
			directory: path.join(__dirname, "src"), // file yang dilacak oleh server
		},
		compress: true,
		port: 3000, // port server
		liveReload: true, // live reload
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js", // nama file output
		clean: true, // membersihkan file sebelum di compile
		assetModuleFilename: "img/[name][ext]",
	},
	plugins: [new MiniCssExtractPlugin()],
});
