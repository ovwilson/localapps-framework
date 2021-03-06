var webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),    
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    commonConfig = require('./webpack.common.js'),
    helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'PRODUCTION';

module.exports = webpackMerge(commonConfig, {
  
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/dist',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]

});
