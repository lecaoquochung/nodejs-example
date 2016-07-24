var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename");
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');

// css
gulp.task('css', function() {
  gulp.src('./less/styles.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(gulp.dest('./static/css'))
  .pipe(minifyCSS({keepBreaks:true}))
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./static/css'));
});

gulp.task('watchers', function() {
  gulp.watch('less/**/*.less', ['css']);
});

// javascript
gulp.task('js', function() {
  gulp.src('./js/app.js')
  .pipe(browserify())
  .pipe(gulp.dest('./static/js'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./static/js'))
});
