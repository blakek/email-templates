var gulp = require('gulp')
  , zip = require('gulp-zip')
  , jade = require('gulp-jade')
  , fs = require('fs')
  , inlineCss = require('gulp-inline-css')
  , browserSync = require('browser-sync').create()
  , replace = require('gulp-replace')

/* Package all our image assets into a zip file (e.g. for Campaign Monitor) */
gulp.task('zip-images', function () {
  var imageGlob = 'template/images/*'

  gulp.src(imageGlob)
    .pipe(gulp.dest('server/images/'))
    .pipe(zip('images.zip'))
    .pipe(gulp.dest('output'))
    .pipe(browserSync.stream())
})

/* Compile the email templates */
gulp.task('templates', function () {
  // Read template variables from JSON file
  var templateLocals = JSON.parse(fs.readFileSync('template/variables.json'))
  var retainedStyles = fs.readFileSync('template/reset-retain.css')

  var jadeOpts = {
    locals: templateLocals,
    pretty: true // Don't minify output
  }

  gulp.src('template/index.jade')
    .pipe(jade(jadeOpts).on('error', (err) => console.log(err.message) ))
    .pipe(inlineCss())
    .pipe(replace('$retainedStyles', `<style>${retainedStyles}</style>`))
    .pipe(replace(/\/\*.*?\*\//g, '')) // Strip out comments
    .pipe(gulp.dest('output'))
    .pipe(gulp.dest('server'))
    .pipe(browserSync.stream())
})

/* Run a development server */
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
