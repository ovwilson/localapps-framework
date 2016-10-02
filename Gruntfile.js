var appSampleConfig = require('./src/webpack.config.app.sample.js');

module.exports = function(grunt) {

  // Project configuration.

    
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    webpack: {
        appsampleprod : appSampleConfig
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
  // Production build
  grunt.registerTask('appsampleprod', ['exec:appsampleprod','webpack:appsampleprod','exec:start']);
  // The development server (the recommended option for development)
  grunt.registerTask('app-sample-dev', ['exec:app-sample-dev']);


};