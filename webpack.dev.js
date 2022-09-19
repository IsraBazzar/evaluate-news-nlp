const path = require('path')
const webpack = require("webpack")
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 3000,
        hot: false
    },
    module: {
        rules: 
        [
                    {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
                    },
                    {
test: /.scss$/,
use: [ 'style-loader', 'css-loader', 'sass-loader' ]
}
,
{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }            
     
                    
    ]
    },

    plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    })
]
}
