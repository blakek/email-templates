var gulp = require('gulp')
  , zip = require('gulp-zip')
  , jade = require('gulp-jade')
  , fs = require('fs')
  , inlineCss = require('gulp-inline-css')
  , browserSync = require('browser-sync').create()

gulp.task('zip-images', function () {
  var imageGlob = 'template/images/*'

  gulp.src(imageGlob)
    .pipe(gulp.dest('server/images/'))
    .pipe(zip('images.zip'))
    .pipe(gulp.dest('output'))
    .pipe(browserSync.stream())
})

gulp.task('templates', function () {
  var templateLocals = JSON.parse(fs.readFileSync('template/variables.json'))
  var jadeOpts = {
    locals: templateLocals,
    pretty: true
  }

  gulp.src('template/index.jade')
    .pipe(jade(jadeOpts).on('error', (err) => console.log(err.message) ))
    .pipe(inlineCss())
    .pipe(gulp.dest('output'))
    .pipe(gulp.dest('server'))
    .pipe(browserSync.stream())
})

gulp.task('watch', function () {
  browserSync.init({
    server: {
      baseDir: './server/'
    }
  })

  gulp.watch('template/*', ['templates'])
  gulp.watch('template/images/*', ['zip-images'])
})

gulp.task('build', ['templates', 'zip-images'])
gulp.task('default', ['build', 'watch'])
