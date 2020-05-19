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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}