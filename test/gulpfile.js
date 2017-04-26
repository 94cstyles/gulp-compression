const gulp = require('gulp')
const compression = require('../index')

gulp.task('compression', function (done) {
  return gulp.src('*.{jpg,png}')
    .pipe(compression())
    .on('finish', done)
})
