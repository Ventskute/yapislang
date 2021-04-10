const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './index.js',
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    port: 8000,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"],
      },
      {
        test: /\.(yap)$/,
        use: [
          'file-loader?name=[name].[ext]',
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  node: {
    fs: 'empty'
  }
};