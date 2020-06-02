const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

module.exports = {
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /.\css$/,
            use: ['style-loader', 'css-loader']
        },{
            test: /.\js$/,
            exclude: /node_module/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/')
    }
}