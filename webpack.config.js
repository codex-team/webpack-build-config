/**
 * Bundle config
 */

 var ExtractTextPlugin = require("extract-text-webpack-plugin");
 var StyleLintPlugin = require("stylelint-webpack-plugin");
 var webpack = require("webpack");

module.exports = {
    entry: './public/app/js/main.js',
    output: {
        filename: './public/build/bundle.js',
        library: 'testApp'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader?importLoaders=1!postcss-loader") },
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ]
    },
    postcss: function () {
        return [
            // require('autoprefixer'),

            // Allow using CSSNext for included files
            require('postcss-smart-import'),

            // Allow use new CSS features
            require('postcss-cssnext')
        ];
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),

        new webpack.NoErrorsPlugin(),
        
        // Move CSS and JS into separate file
        new ExtractTextPlugin("public/build/bundle.css"),

        // Check CSS syntax
        new StyleLintPlugin({
            context : './public/app/css/',
            files : 'main.css'
        })
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 10
    }
};