var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var rename = require("gulp-rename");
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var Ractive = require('ractive');
var tap = require('gulp-tap');

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
  gulp.src('./src/**/*.js')
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./build/'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('./build/'))
});

gulp.task('watchers', function() {
  gulp.watch('src/**/*.js', ['js']);
});

// templates
// convert all /frontend/tpl/ HTML to JavaScript (Ractive.js & Browsersify serve)
gulp.task('templates', function() {
  gulp.src('./frontend/tpl/**/*.html').pipe(tap(function(file, t) {
    var precompiled = Ractive.parse(file.contents.toString());
    precompiled = JSON.stringify(precompiled);
    file.contents = new Buffer('module.exports = ' + precompiled);
  }))
  .pipe(rename(function(path) {
    path.extname = '.js';
  }))
  .pipe(gulp.dest('./frontend/tpl'))
});

gulp.task('default', ['css', 'templates', 'js', 'watchers']);
