const webpack = require('webpack');
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
            importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
          }
        }, 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: []
}