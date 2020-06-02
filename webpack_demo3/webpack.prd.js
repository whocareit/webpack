const merge = require('webpack-merge');
const conN = require('./webpack.con');

const proD = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
}

module.exports = merge(conN, proD)