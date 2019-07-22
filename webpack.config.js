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
    //publicPath: 'http://www.cdn.com'
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
      }
    ]
  },
  //webpack plugins类似Vue中的生命周期钩子函数, 在特定的时刻执行某个操作, 
  //例如下方html- webpack - plugin就是在打包过程完成后, 以指定或默认的template为模板, 生成一个HTML文件, 并将打包的文件注入到生成的HTML中;
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  }), new CleanWebpackPlugin()]
}