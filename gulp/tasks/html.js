const gulp = require('gulp')

module.exports = function index() {
  return gulp.src('src/pages/index.html')
    .pipe(gulp.dest('build/'))
}
