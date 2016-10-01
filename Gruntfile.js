module.exports = function(grunt) {

  // Project configuration.

    require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
    var webpack = require("webpack");
    var webpackConfig = require("./src/webpack.config.js");
  
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
        options: webpackConfig,
        build: {
            plugins: webpackConfig.plugins.concat(
                new webpack.DefinePlugin({
                    "process.env": {
                        // This has effect on the react lib size
                        "NODE_ENV": JSON.stringify("production")
                    }
                }),
                new webpack.optimize.DedupePlugin(),
                new webpack.optimize.UglifyJsPlugin()
            )
        },
        "build-dev": {
            devtool: "sourcemap",
            debug: true
        }
    },

    watch: {
        appsample: {
            files: ["app-sample/**/*"],
            tasks: ["webpack:build-dev"],
            options: {
                spawn: false,
            }
        }
    },    

    exec :{
        'test' : {
            cmd : 'echo Grunt is working!!'
        },
        'app-sample-prod' : {
            cmd : function(){
                return 'rimraf app-sample/dist && webpack --config src/webpack.prod.js --progress --profile --bail && node devserver';
            }
        },
        'app-sample-dev' : {
            cmd : function(){
                return 'webpack-dev-server --inline --progress --port 8080';
            }
        }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-exec');

  // Default task(s).
  grunt.registerTask('default',['exec:test']);
  grunt.registerTask('app-sample-prod', ['exec:app-sample-prod']);
  grunt.registerTask('app-sample-dev', ['exec:app-sample-dev']);
};