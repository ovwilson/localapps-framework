var webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    commonConfig = require('../../common/webpack.common.js'),
    helpers = require('../../common/helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  
  devtool: 'source-map',

   entry: {
    'polyfills':'./common/polyfills.ts',
    'vendor': './common/vendor.ts',
    'app': './app-sample/app/main.ts'
  },

   output: {
    path: helpers.root('app-sample/dist'),
    publicPath: './app-sample/dist/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    // Necessary plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './app-sample/index.html'
    }),
    // End Necessary plugins

    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),    
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]

});
