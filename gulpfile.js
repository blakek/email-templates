const browserSync = require('browser-sync').create()
const fs = require('fs')
const gulp = require('gulp')
const handlebars = require('gulp-compile-handlebars')
const inlineCss = require('gulp-inline-css')
const rename = require('gulp-rename');
const replace = require('gulp-replace')
const zip = require('gulp-zip')

/* Package all our image assets into a zip file (e.g. for Campaign Monitor) */
gulp.task('zip-images', function () {
  gulp.src('src/images/*')
    .pipe(gulp.dest('server/images/'))
    .pipe(zip('images.zip'))
    .pipe(gulp.dest('output'))
    .pipe(browserSync.stream())
})

/* Compile the email templates */
gulp.task('templates', function () {
  // Read template variables from JSON file
  const templateLocals = JSON.parse(fs.readFileSync('src/variables.json'))
  const retainedStyles = fs.readFileSync('src/reset-retain.css')
  const compileOptions = {
    batch: ['src/partials']
  }

  gulp.src('src/index.hbs')
    .pipe(
      handlebars(templateLocals, compileOptions)
        .on('error', (err) => console.log(err.message))
    )
    .pipe(inlineCss())
    .pipe(replace('$retainedStyles', `<style>${retainedStyles}</style>`))
    .pipe(replace(/\/\*.*?\*\//g, '')) // Strip out CSS comments
    .pipe(rename('index.html'))
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

  gulp.watch('src/*', ['templates'])
  gulp.watch('src/images/*', ['zip-images'])
})

gulp.task('build', ['templates', 'zip-images'])
gulp.task('default', ['build', 'watch'])
