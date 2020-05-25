const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
//complier的意思说明，可以随时用webpack进行代码的编译
const complier = webpack(config);

const app = express();

app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}))



app.listen(3000, () => {
    console.log('server is runing')
})