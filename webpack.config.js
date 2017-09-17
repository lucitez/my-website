const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

var config = {
  entry: './src/main.js', // entry point
  output: {
    filename: 'bundle.js', // place where bundled app will be served
    path: __dirname + '/build'
  },
  devServer: {
    inline: true, // autorefresh
    port: 8008 // development port server
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // search for js files
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['es2015', 'react'] // use es2015 and react
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  plugins: [
    new HtmlPlugin({
      template: 'index.html'
    })
  ]
}

module.exports = config
