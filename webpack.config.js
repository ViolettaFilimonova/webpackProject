const {resolve} = require('path');
const webpack = require('webpack')
const MiniCssPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          // {
          //   test: /\.css$/i,
          //   use: ['style-loader', 'css-loader'],
          // },
          {
            test: /\.s[ac]ss$/i,
            // use: ['style-loader',"css-loader", 'sass-loader'],
            use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            loader: 'file-loader',
            type: 'asset/resource',
          },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssPlugin({
            filename: '[name].[contenthash].css',
        })
    ]
};