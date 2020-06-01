const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 


// "plugins": [["@babel/plugin-transform-runtime",{
//     "corejs": 2,
//     "helpers": true,
//     "regenerator": true,
//     "useESModules": false
// }]]
// presets: [['@babel/preset-env',{
//     targets: {
//         chrome: "67"
//     },
//     useBuiltIns: 'usage'
// }]]

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './src/index.js'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 3000
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