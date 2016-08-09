var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
  gulp.src('./js/*.js')
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('./static/js'))
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./static/js'))
});
