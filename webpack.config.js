const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
	},
	optimization: {
		minimize: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Debugging Demo',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
