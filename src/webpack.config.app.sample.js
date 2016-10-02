var webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
   
   devtool: 'source-map',
               
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './app-sample/main.ts'
    },               

    output: {
        path: helpers.root('app-sample/dist'),
        publicPath: '/app-sample/dist/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    htmlLoader: {
        minimize: false // workaround for ng2
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
        {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            loader: 'html'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        },
        {
            test: /\.css$/,
            exclude: helpers.root('src', 'app'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        },
        {
            test: /\.css$/,
            include: helpers.root('src', 'app'),
            loader: 'raw'
        }
        ]
    },
  
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
          name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
          template: 'app-sample/index.html'
        }),
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
};