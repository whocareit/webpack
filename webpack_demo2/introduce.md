## plugin
webpack在运行到某个时候，帮你做的一些事情，可以用生命周期函数来理解
## html-webpack-plugin
会帮助生成一个html文件，并将打包好的js文件自动添加到这个html文件中，但是默认生成的html模板里面没有任何的结构，因此在使用时，需要引入自己定义好的html文件模板，此时只需要将实例中，传入一个实例对象，对象的属性名为
template,属性值为文件的路径。需要注意的是，该插件运行的时间是在webpack打包完成之后才进行
## clean-webpack-plugin
会在打包之前，去清除掉之前打包好的文件，在官方引入中引入的方式的方式是通过import {} from '';方式，在实例化的过程中也不需要去传入文件名的参数
## output与entry基础配置
### 对于entry这个参数，其对应的的属性值有两种传入参数的方式
1. 如果传入的是单个文件，此时该参数可以是字符串，如果output中的传入的对象没有配置时，此时输出打包后的文件名为main.js；如果使用了filename这个属性，那么最后打包输出的名称为filename的属性值。
2. 如果入口文件是两个及其以上，那么配置entry的参数的属性值，为一个对象，在该对象的内部传入的属性，与属性值分别代表的意思就是打包后生成的文件的文件名，以及打包的入口地址，那么与此对应的output中，filename的属性值，就可以写成[name].js或者用[hash]_[name].js等方式，来说明有多个文件的引入
### publicPath参数说明
该参数表示生成的打包好的文件，可以在一个相同域名下的文件中，如： 'http://cdn.com.cn',则此时就需要在output中新增publicPath: 'http://cdn.com.cn',在这里需要注意下，使用该参数，不能乱用，否则会出现路径错误
## sourceMap使用
1. sourceMap的作用，用于去检测打包生成后的bug检测，其表示一种映射关系，用于指出产生错误的源文件的位值
2. devtool参数的说明
* none：能够指出打包生成后的文件的错误代码的位置，但是不能指出源文件出错代码的错误 
* source-map: 能够找出源文件错误，但是会生成.map的文件
* inline会将.map文件嵌入到打包生成的文件
* module能够映射出模块、插件等这些依赖包中的问题
* cheap 不会精确到列中的错误
* eval 包裹模块代码
3. 通常情况下各环境中推荐的参数
* production下
devtool: 'cheap-module-eval-source-map';
* development下
devtool: 'cheap-module-source-map'
## webpack自动启动服务方式
1. 在webpack中的script下配置webpack --watch参数，但是这样做的不能实现自动刷新
2. 使用devServer，能够启动界面，并且能完成自动刷新，并且启动时是在http协议下，即本地的服务器启动,此时需要在script下配置webpack-dev-server，同时还需要安装webpack-dev-server这个依赖。devserver的参数说明
* contentBase用于指明打包生成的文件的位置
* port用于说明启动端口的位置，默认指的是8080
* proxy用于指明，当转到某个路由时，自动跳转到某个地址
3. 使用node手动配置devserver,使用webpack-dev-middleware中间件启动
## Hot Module Replacement使用
* 作用：当重新刷新界面时，可以使得刷新后的界面，保存之前的一些操作，只更改某些操作
1. 对于css而言，当使用hmr后，可以更新其所有的内容，但是对于js的操作，会保存前一次的更新
2. 对于js而言，可以一些操作，去检测到某个模块改变之后的状态
* 配置方式
1. 首先需要在devServer中去配置hot参数设置为true,hotOnly参数设置为true
2. 引入webpack,然后plugins中新增webpack.HotModuleReplacement()实例
