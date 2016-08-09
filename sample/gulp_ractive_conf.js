// gulpfile.js
gulp.task('templates', function() {
  gulp.src('./frontend/tpl/**/*.html')
  .pipe(tap(function(file, t) {
    var precompiled = Ractive.parse(file.contents.toString());
    precompiled = JSON.stringify(precompiled);
    file.contents = new Buffer('module.exports = ' + precompiled);
  }))
  .pipe(rename(function(path) {
    path.extname = '.js';
  }))
  .pipe(gulp.dest('./frontend/tpl'))
});
