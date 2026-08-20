const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                type: "javascript/auto"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 8080
    }
};