/**
 * Bundle config
 */

 var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './public/app/js/main.js',
    output: {
        filename: './public/build/bundle.js',
        library: 'testApp'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader") }
        ]
    },
    plugins: [
        new ExtractTextPlugin("public/build/bundle.css")
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 10
    }
};