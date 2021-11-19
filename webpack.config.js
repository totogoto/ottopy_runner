const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const rules = [
	{ test: /\.ts$/, loader: "ts-loader" },
	{ test: /\.css$/, use: ["style-loader", "css-loader"] },
];

module.exports = {
	// bundling mode
	mode: "production",
	// entry files
	entry: "./src/index.ts",

	// output bundles (location)
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "runner.js",
	},

	// file resolutions
	resolve: {
		extensions: [".ts", ".js"],
	},

	// loaders
	module: {
		rules: rules,
	},

	//plugins
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "./template/index.html",
				},
			],
		}),
	],

	//devserver
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 9000,
	},

    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};
