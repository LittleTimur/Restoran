const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, loader: "ts-loader" },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.hbs"
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/style.css", to: "style.css"},
                {from: "./src/img", to: "img"},
            ],
        })
    ]
};