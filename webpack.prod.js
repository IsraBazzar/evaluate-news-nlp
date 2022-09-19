const path = require('path')
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    devServer: {port: 3000},
    module: {
        rules: [
                    {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
                    },
                    {
        test: /.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}   ,
{
            test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {}
                }
            ]
        }            
                    
            ]
    },
    
    plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }),
    new WorkboxPlugin.GenerateSW(),

     new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: false,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
]
}
