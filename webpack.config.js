/**
 * Created by KyleRuan on 2017/4/8.
 * webpack 2.2.3
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ROOT_PATH =path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');
module.exports = {
  // 配置信息
  entry: {
    path: path.resolve(APP_PATH,'index.jsx')
  },
  output: {
    path:  BUILD_PATH,
    filename: 'bundle.js'
  },
  //开启dev source map
  devtool: 'eval-source-map',
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    // progress:true
  },
  module: {

    rules: [

      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: APP_PATH,
      },
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        include:APP_PATH
      }
    ],

  //   loaders:[
  //     {
  //       test: /\.jsx?$/,
  //       loader: ['babel'],
  //       include:APP_PATH
  //     }
  //   ]
  },
  plugins: [new HtmlWebpackPlugin(
      {
        title:"kyleruan"
      }
  )],
  resolve:{
    extensions:['.','.js','.jsx']
  }

}
