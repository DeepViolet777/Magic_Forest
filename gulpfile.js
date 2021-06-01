const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const fonts = require('./gulp/tasks/fonts')
const html = require('./gulp/tasks/html')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const copyDependencies = require('./gulp/tasks/copyDependencies')
const deploy = require('gulp-gh-pages');


gulp.task('deploy', function () {
  return gulp.src("./build/**/*")
    .pipe(deploy())
});

function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(styles, script, fonts, imageMinify, html)

const build = gulp.series(clean, copyDependencies, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)


