# bebel
## babel-loader的作用
作为一个桥梁，将本地的js文件与babel库连接起来
## @babel/core
是一个babel的核心库，里面是关于所有的js中es6部分转为es5中的核心内容
## @babel/preset-env
如果只是这种默认情况的话，用于es6转为es5的语法,对于es5中的有一些语法还是不能够被低版本的浏览器识别，如果要使得低版本的浏览器也能够识别的话
## @babel/polyfill
使用polyfill该库的作用对于一些低版本的浏览器，他们不支持es5的语法，因此可以使用该库，将es5转为浏览器能够识别的语法规则，在这里使用useBuiltIns的目的是为了实现按需加载的目的，不必要将所有的代码都进行转化
缺点：这种方式来实现转义会造成全局污染，当遇到类库或者是组件库的开发时，应该换另外的方式来实现,target参数作用，设置需要进行转义的浏览器的版本信息
其具体的使用方式如下：
1. 安装@babel/polyfill与@babel/preset-env这两个依赖
2. 在optios中配置presets参数，其参数值为 [['@babel/preset-env',{ targets: {chrome: "67"}useBuiltIns: 'usage'}]]
3. 最后在需要转义的js文件中全局引入@babel/polyfill，具体为import '@babel/polyfill'
## @babel/plugin-transform-runtime
该插件的作用与polyfill的作用类似，但其弥补了polyfill的缺点，当遇到类库或者是组件库的开发时，就可以使用这种方式来对项目进行开发，具体的使用方式如下：
1. 首先安装@babel/plugin-transform-runtime和@babel/runtime两个库
2. 然后对其进行配置配置参数如webpack.config.js文件中所示
3. 当"corejs"的值为2时，还需要安装依赖@babel/runtime-corejs2
4. 最后对其进行打包即可完成所需要的配置
## 当babel中options的配置参数非常多时的处理方式
1. 在根目录下去创建.babelrc文件夹
2. 将options的文件夹中的配置内容放入到该文件中，并采用json的配置
3. 删除掉optios文件夹即可
## 使用react代码如何实现打包
1. 首先安装react与react-dom的依赖包
2. 其次是安装@babel/preset-react,用于去解析jsx语法
3. 在babelrc中配置参数，增加@babel/preset-react依赖包



