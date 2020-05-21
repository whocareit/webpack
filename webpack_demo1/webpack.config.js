const path = require('path');

module.exports = {
    mode: "production",
    entry: {
        mian: "./src/index.js"
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]_[hash].[ext]',
                            outputPath: 'images',
                            limit: 40210                    }
                    }
                ]
            },{
                test: /\.scss$/,
                use: [
                 'style-loader',
                 {
                     loader: 'css-loader',
                    //  options: {
                    //     importLoaders: 2,
                    //     modules: true
                    //  }
                 },
                 'sass-loader'
                ]
            },{
                test: /\.(eot|ttf|woff|woff2)$/,
                use:{
                    loader: 'file-loader'
                }
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}