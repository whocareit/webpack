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
4. 注意：当在preset-env下设置了useBuiltIns时，是可以不用在js中引入import '@babel/polyfill的'
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
## Tree Shaking使用
* 作用： 实现按需打包的效果，即无论你引入的文件本身含有的api有多少，但是在打包的时候，只打包你使用的api，这就是tree Shaking的作用
* 注意： Tree Shaking只支持ES module的引入原因是因为ES Module这种方式的底层是一种静态方式的引入方法
* 具体配置方式
1. Tree shaking这种方式，只对于production这种模式起作用，如果在development模式下配置的话，Tree Saking打包的内容，还是会存在所有的Api，只是不同点在于，其做了个区分
2. 在webpack.config.js文件中新增一个optimization: { usedExports: ture}的配置项，并且更改模式,这里需要注意的一点就是在线上打包的时候可以不要optimization这个配置参数
3. 在packpage.json文件中，新增sideEffects配置项，该配置项表示什么文件使用Tree Shaking,如果该属性值为false则表示，所有的文件都需要设置Tree Shaking, 如果该属性值为["*.css"]文件，则表示所有的css文件都不适用Tree Shaking这种形式
## development和production模式下，进行打包之间的差异
1. 打包后生成的文件不一样，在development模式下，打包生成的是没有压缩的文件，在production模式下，打包生成的是压缩文件，两者在性能优化上有差异
2. 存在配置上的差异，如在development模式下打包，使用devServer来启动一个本地服务器，而在production模式下就不需要配置devServer，两种之间还存在devtool之间的配置差异等内容
### 针对不同的环境下用不同得配置文件，实现按需打包
1. 对于开发环境下，可以将开发文件夹下webapck.config.js文件重新的给分离出来，重新命名打包的配置文件，然后在package文件夹中，配置"dev": "webpack-dev-server --config 配置文件名"。对于线上打包的情况，可以使用
"pro": "webpack --config 线上webpack的配置文件"
2. 合并文件夹，对于两个配置文件的公共部分，可以将其分离出来，然后再使用第三方库，进行文件合并，然后进行各自的打包，需要使用的第三方库为webpack-merges


