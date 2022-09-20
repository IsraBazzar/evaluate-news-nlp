const path = require('path')
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {GenerateSW} = require('workbox-webpack-plugin');

// Configuration for service worker - https://www.npmjs.com/package/service-worker-plugin
const rootConfig = {
    cache: {
        offline: true,
        precache: ['\\.js'],
        strategy: [{
            type: 'prefer-cache',
            matches: ['\\.js']
        }]
    }
};

/***************************************** */

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    devServer: {
        port: 3000
    },
    output: {
        publicPath: './js/',
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }

        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        // workbox plugin setup
        // https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/
        new GenerateSW(),
    ]
}