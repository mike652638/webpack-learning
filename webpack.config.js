const path = require('path');

module.exports = {
  //mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.(jpg|jpeg|png|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: 'img_[name].[ext]',
          outputPath: 'imgs/',
          publicPath: 'dist/imgs/',
          limit: 10240
        }
      }
    }]
  }
}