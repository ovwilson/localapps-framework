var webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    commonConfig = require('../../common/webpack.common.js'),
    helpers = require('../../common/helpers');

module.exports = webpackMerge(commonConfig, {
  
   devtool: 'cheap-module-eval-source-map',
  
  entry: {
    'polyfills': './common/polyfills.ts',
    'vendor': './common/vendor.ts',
    'app': './app-sample/app/main.ts'
  },

  output: {
    path: helpers.root('app-sample'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

  plugins: [
    // Necessary plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: './app-sample/index.html'
    }),
    new webpack.ProvidePlugin({
      $:'jquery',jQuery:'jquery'
    }),
    // End Necessary plugins
    new ExtractTextPlugin('[name].css')
  ]
  
});
