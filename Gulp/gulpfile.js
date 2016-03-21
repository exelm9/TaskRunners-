
// loads Gulp plugins defined in package.json file 
var gulp = require('gulp'),
    sass = require('gulp-sass');

// output styles/main.scss to output/styles/main.css
gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./output/styles'));
});

// defines gulp tasks 
gulp.task('default', ['sass']);

