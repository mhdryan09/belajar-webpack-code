const path = require("path");
const glob = require("glob");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const PATHS = {
	src: path.join(__dirname, "src"),
};

module.exports = merge(config, {
	mode: "production",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js", // nama file output
		clean: true, // membersihkan file sebelum di compile
		assetModuleFilename: "img/[hash][ext]",
	},
	optimization: {
		minimizer: [
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
			`...`,
			new CssMinimizerPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
				},
			}),
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "main.[contenthash].css",
		}),
		new PurgeCSSPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
		}),
	],
});
