var gulp = require('gulp');
var concat = require('gulp-concat');
var order = require('gulp-order');

gulp.task('createGlobalScss', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(order([
    'scss/nested/**/*.scss',
    'scss/b.scss',
    'scss/a.scss'
  ], {base: __dirname}))
  .pipe(concat('globalScss.scss'))
  .pipe(gulp.dest('./'))
});