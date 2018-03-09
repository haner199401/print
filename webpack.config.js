const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: __dirname + "/src/app.js",
    output: {
        path: __dirname + "/build",
        filename: "print.js"
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        inline: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin("build/*.*", {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
};
