const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
	mode: "development", // mode development
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js", // nama file output
		clean: true, // membersihkan file sebelum di compile
		assetModuleFilename: "img/[hash][ext]",
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "main.[contenthash].css",
		}),
	],
});
