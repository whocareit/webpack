const merge = require('webpack-merge');
const conN = require('./webpack.con');

const devC = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        port: 3000
    },
    optimization: {
        usedExports: true
    }
}

module.exports = merge(conN, devC);