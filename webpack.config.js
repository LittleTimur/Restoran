const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx']
    },
    module: {
        rules: [
            { test: /\.(ts|tsx)$/, loader: "ts-loader" },
            {
                test: /\.hbs|html$/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/img", to: "img"},
            ],
        })
    ],
    devServer: {
        historyApiFallback: true,
        static: {
        directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
    },
};