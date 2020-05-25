const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webapck = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './src/index.js'
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: './dist',
        open: true,
        proxy: {
            '/api': "http://localhost:3000"
        },
        hot: true,
        hotOnly: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use:['style-loader','css-loader']
        }]
    },
    plugins: [
        new webapck.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: 'src/index.html'
        })],
    output: {
        publicPath: '/',
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/')
    }
}