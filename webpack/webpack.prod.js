const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "js/[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [ 
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.handlebars',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        })
    ]
});