const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {
  entry: {
    'app': './src/main.ts',
    'styles': './src/scss/main.scss'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          // use: 'style-loader',
          use: 'css-loader!sass-loader?config=nodeSassConfig'
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        nodeSassConfig: {
          outputStyle: 'compressed'
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
