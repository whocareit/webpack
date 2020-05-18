# webpack安装以及使用方法
## 全局安装方式
一般情况下，当安装webpack-cli时，会自动的给安装上webpack
npm install webpack webpack-cli -g 此时如果安装可在全局使用webpack -v 查询当前的版本号
## webpack的定义
weback准确来说是一个模块打包方式，它能自动识别如ES modulu 、commonJS 、 AMD 、CMD这样的模块导出方式，但是对于高级的一些加载方式并不能识别。webpack能打包的在最初时，只能打包js文件,后来能打包css，less等文件
## 局部安装方式
npm install webpack webpack-cli --save-dev 或者使用npm install webpack webpack-cli -D 进行安装  此时需要使用npx webpack -v才能查询当前的版本号，此时的npx表示能够在node_module文件夹中去找寻这个模块
## 版本号查询
使用npm info webpack即可查询
## webpack打包方式 
1. 全局安装webpack时，可以使用webpack 文件名  进行打包
2. 局部安装时，使用npx webpack 文件名  进行打包
3. 在package.json文件中，配置命名，在script文件指令中，配置buldle命令，其属性值为webpack,在此时不用写为npx webpack 因为此时在打包的过程中会自动找到当前目录下的node_modules
## webpack配置文件
在使用webpack加文件名时，此时使用的是webpack的默认配置文件，要想按照制定的内容进行打包，需要进行指定的配置
1. webpack.config.js为webpack的配置文件夹，在里面可以写配置文件
2. 如果将默认配置文件夹的名字改为其他的，则需要使用npx webpack --config 其他的文件名
## webpack配置文件内容
const path = require('path');

module.exports = {
    mode: "production",
    entry:{
      main: "./src/index.js"
    },
    output: {
      filename:  'buldle.js',
      path: path.resolve(__dirname, 'dist')
    }
}

mode表示打包的生成的文件是否为压缩，默认情况下默认的参数是production，此时表现形式为压缩形式
当参数为development时，此时表现形式为非压缩形式
## 注意的点
为什么会使用webpack-cli这个依赖包，该依赖包的作用是用于使得webpack这个命名能够在命令行使用,
## 关于打包文件过程中产生的参数说明
Hash 表示项目的唯一Hash值  Version表示webpack版本号 Time表示打包时间  Asset表示打包生成文件名
chunk中放入的是每一个js文件对应的Id值  chunk Names 表示入口文件的的main参数
  