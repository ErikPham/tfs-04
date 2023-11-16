const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        path: path.resolve('output'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: [MiniExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new MiniExtractPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html',
            title: 'My App',
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}
