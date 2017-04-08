/**
 * Created by KyleRuan on 2017/4/8.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 配置信息
  entry: path.join(__dirname,'app'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        test: /\.css$/,
        loader: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(
      {
        title:"kyleruan"
      }
  )]

}
