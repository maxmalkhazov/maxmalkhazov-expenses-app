const path = require("path");

module.exports = (env) => {
	
	const isProduction = env === "production";

	return {
		entry: "./src/app.js",
		output: {
			path: path.join(__dirname, "public"),
			filename: "bundle.js"
		},
		module: {
			rules: [{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}]
		},
		devtool: isProduction ? "source-map" : "cheap-module-eval-source-map", // for mapping errors in the console
		devServer: {
			contentBase: path.join(__dirname, "public"),
			historyApiFallback: true // for client-side routing, 404 will fallback to index.html
		}
	}
};

