var webpack = require('webpack'),
    appSampleDev = require('./app-sample/build/webpack.dev.js'),
    appSampleProd = require('./app-sample/build/webpack.prod.js');

module.exports = function(grunt) {
    
    // Project configuration.
    
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    webpack: {      
        appsampleprod : appSampleProd
    },
    'webpack-dev-server' : {
        appsampledev: {
            keepAlive: true,
            publicPath:"/",
            contentBase : './app-sample/app/',
            webpack : appSampleDev
        }
    },

    watch: {
        appsample: {
            files: ["app-sample/**/*"],
            tasks: ["webpack:appSampleProd"],
            options: {
                spawn: false
            }
        }
    },    

    exec :{
        'test' : {
            cmd : 'echo Great. Grunt is working!!'
        },
         'start' : {
            cmd : 'node devserver'
        },
        'appsampleprod' : {
            cmd : function(){
                return 'rimraf app-sample/dist';
            }
        },
        'appsampledev' : {
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
  // Production build
  grunt.registerTask('appsampleprod', ['exec:appsampleprod','webpack:appsampleprod']);
  // The development server (the recommended option for development)
  grunt.registerTask('appsampledev', ['webpack-dev-server:appsampledev']);


};