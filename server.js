const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleWare = require('webpack-dev-middleware');
const config = require('./webpack.config');
const compiler = webpack(config); //在node中使用webpack

const app = express();
app.use(webpackDevMiddleWare(compiler, {
  publicPath: config.output.publicPath
}));
app.listen('9000', () => {
  console.log('Server is running at http://localhost:9000 ...');
});