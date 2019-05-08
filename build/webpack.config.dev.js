const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');


module.exports = merge(baseWebpackConfig, {
    // devtool: 'eval-source-map',
    mode: 'development',
    devServer: {
        // inline: true,
        // contentBase: 'src',
        port: '4001',
        hot: true,
        // quiet: true, //necessary for friendly
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

    ],

});
