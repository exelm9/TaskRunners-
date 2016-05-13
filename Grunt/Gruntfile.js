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
    },
    uglify: {
        build: {
          files: {
            'output/js/merge_sort.min.js': 'js/merge_sort.js'
        }
      }
    }
  });
  
  // loads Grunt Plugins defined in package.json file 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // defines Grunt Task 
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['uglify']);
};

