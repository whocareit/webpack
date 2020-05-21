## loader的含义
loader翻译模板，对于webpack而言在没有配置时，默认打包的只能是js文件，如果想要去打包其他的文件形式，就需要在webpack.config.js文件中去配置。
## file-loader和url-loader
作用：能够打包静态文件，如图片文件打包，使用url-loader能够打包所有file-loader打包的静态文件
区别：url-loader比file-loader多了一个limit配置参数，如果打包的静态文件大于这个配置参数，就会将其打包到一个文件夹中，如果小于配置参数的容量就会被打包到生成的js文件当中
## style-loader和css-loader
作用，对于css文件进行模板翻译，翻译的时候需要这两个loader,其中css-loader的作用时查看多个css文件之间的关系，style-loader文件的作用是渲染样式在页面上，需要注意的是，这两者的顺序是不够颠倒的，在这个过程中满足从右到左，从下到上的原则，使用方式参照https://webpack.js.org/loaders/sass-loader/
## sass-loader
作用：对于scss文件进行模板翻译，翻译的时候需要三个loader，从左到右分别为style-loader css-loader
sass-loader,表示的含义：先进行scss文件翻译，然后是css文件翻译，最后是渲染到页面上
## css-loader中的importLoadersd
该参数的参数值为2时，表示允许scss文件中的import导入
## css-loader中的modules
该属性的表现方式该文件为局部样式而不是全局样式，在这时导入的样式文件名为style
## webpack.config.js中配置文件的形式如下
只需要在配置文件中加上modules模块，并且在rules下增加loader，rules中存放的是数组，数组中存放的就是
需要一个个对象，对象中test属性用于匹配文件，use表示使用何种规则
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
                        loader: 'file-loader',
                        options: {
                            name: '[name]_[hash].[txt]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }，{
                test： /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}