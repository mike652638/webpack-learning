const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
/* //以上为ES6解构赋值写法, 相当于
const _CleanWebpackPlugin = require('clean-webpack-plugin');
const CleanWebpackPlugin = _CleanWebpackPlugin.CleanWebpackPlugin;
//参考: https://stackoverflow.com/questions/41058569/what-is-the-difference-between-const-and-const-in-javascript */

module.exports = {
  //mode: 'development',
  devtool: 'cheap-module-eval-source-map', //devtool包含SourceMap(打包压缩后的代码与原模块化代码的印射关系, 比如在Header.js模块中console.log('abc'), 对控制台输出的'abc'进行溯源, 若关闭或没有SourceMap, 则只能溯源至打包压缩后的main.js文件, 若开启了SourceMap, 则可以直接找到原代码模块Header.js中的对应行, 便于开发过程中的Debug;)
  //devtool: 'cheap-module-source-map', //建议用于mode: production
  entry: {
    main: './src/index.js',
    //dev: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    //publicPath: '/'
  },
  devServer: {
    contentBase: './dist', //devServer服务器(localhost:8080)对应的文件夹目录
    open: true, //运行webpack-dev-server后自动打开浏览器并访问devServer运行的localhost端口
    port: 8888, //默认端口8080, 可在此处更改
    hot: true, //HMR(HotModuleReplacement),热加载(局部改变, 局部刷新变更, 而不用全局刷新)
    hotOnly: true, //即使HMR不生效, 浏览器也不自动刷新
    proxy: {
      '/api': 'http://localhost:3000' //代理服务, 访问api转发到localhost:3000端口, 可以解决跨域问题
    }
  },
  module: {
    //Webpack loaders对模块进行预处理,
    //比如对于scss样式文件, 通过sass- loader进行编译成为css文件, 再通过postcss- loader对某些CSS3样式添加浏览器厂商前缀, 再经过css-loader对模块化css文件进行解析引入, 最终通过style-loader将解析后的css注入到head->style标签内
    rules: [{
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'img_[name].[ext]',
            outputPath: 'imgs/',
            //publicPath: 'dist/imgs/',
            limit: 10240
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'font_[name].[ext]',
            outputPath: 'fonts/',
            //publicPath: 'dist/fonts/'
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 2, // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader,
            modules: true //css模块化, style.avatar => .h88dhu8y8huyg78ghhguh, 避免耦合
          }
        }, 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            ['@babel/preset-env', {
              "targets": "> 0.25%, not dead", //参考https://babeljs.io/docs/en/babel-preset-env#targets
              useBuiltIns: 'usage' //应用此配置, 则在引入babel-polyfill进行ES6 API=>ES5的兼容转换时, 仅转换使用到的ES6 API, 可以大幅减少转换后的js体积, 参考https://www.jianshu.com/p/4822852792d1, https://www.jianshu.com/p/3b27dfc6785c
            }]
          ],
          //下方plugins与上面presets配置二选一, 前者作用于全局, 后者作用于局部(/闭包)沙箱(避免全局污染, 适用于插件/库开发), 参考https://babeljs.io/docs/en/babel-plugin-transform-runtime, 另外babel配置信息(即options里面的内容)可以放入根目录下.babelrc文件中
          /* "plugins": [
            [
              "@babel/plugin-transform-runtime",
              {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "useESModules": false
              }
            ]
          ] */
        },
      }
    ]
  },
  //webpack plugins类似Vue中的生命周期钩子函数, 在特定的时刻执行某个操作, 
  //例如下方html- webpack - plugin就是在打包过程完成后, 以指定或默认的template为模板, 生成一个HTML文件, 并将打包的文件注入到生成的HTML中;
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html'
    }), new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}