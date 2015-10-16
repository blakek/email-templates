var gulp = require('gulp')
  , zip = require('gulp-zip')
  , jade = require('gulp-jade')
  , fs = require('fs')
  , connect = require('gulp-connect')
  , inlineCss = require('gulp-inline-css')

gulp.task('zip-images', function () {
  var imageGlob = 'template/images/*'

  gulp.src(imageGlob)
    .pipe(gulp.dest('server/images/'))
    .pipe(zip('images.zip'))
    .pipe(gulp.dest('output'))
    .pipe(connect.reload())
})

gulp.task('templates', function () {
  var templateLocals = JSON.parse(fs.readFileSync('template/variables.json'))
  var jadeOpts = {
    locals: templateLocals,
    pretty: true
  }

  gulp.src('template/index.jade')
    .pipe(jade(jadeOpts))
    .pipe(inlineCss())
    .pipe(gulp.dest('output'))
    .pipe(gulp.dest('server'))
    .pipe(connect.reload())
})

gulp.task('watch', function () {
  connect.server({
    root: 'server',
    livereload: true
  })

  gulp.watch('template/*', ['templates'])
  gulp.watch('template/images/*', ['zip-images'])
})

gulp.task('build', ['templates', 'zip-images'])
gulp.task('default', ['build', 'watch'])
