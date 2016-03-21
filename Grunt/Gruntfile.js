module.exports = function(grunt) {
  // configures grunt tasks 
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      output: {
        files: {
          'output/styles/main.css':'styles/main.scss'
        }
      }
    }
  });
  
  // loads Grunt Plugins defined in package.json file 
  grunt.loadNpmTasks('grunt-sass');
  // defines Grunt Task 
  grunt.registerTask('default', ['sass']);
};

