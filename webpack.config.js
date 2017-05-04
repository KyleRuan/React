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
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});
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
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
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
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use:[
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin(
      {
        title:"kyleruan"
      }
  ),extractSass],
  resolve:{
    extensions:['.','.js','.jsx']
  }

}
