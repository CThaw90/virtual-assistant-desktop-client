/* global module, require, __dirname */
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/main');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title: 'Desktop Client',
    filename: 'index.html'
});

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({ filename: './css/main.css' });

module.exports = {
    entry: APP_DIR + '/entry.js',
    devtool: 'inline-source-map',
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test:/\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader'
            }]
        }]
    },
    plugins: [HtmlWebpackPluginConfig, MiniCssExtractPluginConfig]
};
